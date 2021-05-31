const { sh, hasErr, fileContains, isMain } = require('../helpers')


module.exports = async function updateGrubTimer () {
  if (await hasErr('sudo stat /etc/default/grub')) {
    return
  }

  const DELAY = isMain ? 1 : 5
  const isAlreadyHasThisDelay = await fileContains('/etc/default/grub', `GRUB_TIMEOUT=${DELAY}`)
  if (isAlreadyHasThisDelay) {
    return
  }

  await sh(`
    sudo sed -i -r 's/GRUB_TIMEOUT=[0-9]+/GRUB_TIMEOUT=${DELAY}/m' '/etc/default/grub'
    sudo grub-mkconfig -o /boot/grub/grub.cfg
  `)
}
