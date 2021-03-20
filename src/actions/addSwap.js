const { sh } = require('../helpers')

const RAM_SIZE_WHEN_NOT_NECESSARY_SWAP = 12 * 1024 * 1024

const getShouldAddSwapSize = async function getShouldAddSwapSize () {
  const hasNotSwap =
    (await sh(`free -h | grep Swap:`)).stdout
      .toString()
      .replace(/\D/g, '')
      .replace(/0/g, '') === ''
  if (!hasNotSwap) {
    return false
  }
  const availableSizeLine = (await sh(`df | grep '%\\s\\/$'`)).stdout
    .toString()
    .split(' ')
    .map(val => val.trim())
    .filter(Boolean)
  const availableSize = availableSizeLine && availableSizeLine[3]
  if (!availableSize) {
    return false
  }
  const currentTotalRam = (await sh(`free | grep Mem:`)).stdout
    .toString()
    .split(' ')
    .filter(Boolean)[1]
  if (RAM_SIZE_WHEN_NOT_NECESSARY_SWAP <= currentTotalRam) {
    return false
  }

  const swapSize = Math.min(Number(currentTotalRam), Number(availableSize) / 5) / 1024 / 1024
  if (swapSize < 1) {
    return false
  }

  return `${swapSize.toFixed(0)}G`
}

module.exports = async function addSwap () {
  const swapSize = await getShouldAddSwapSize()
  if (!swapSize) {
    return
  }

  await sh(`
    sudo fallocate -l ${swapSize} /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    free -h # for checking in the console that swap created
    echo '/swapfile     swap     swap     defaults     0     0' | sudo tee -a /etc/fstab
    sudo cp /etc/fstab /etc/fstabWithSwap.bak
  `)
}