const axios = require('axios')
const { JSDOM } = require("jsdom")
const { sh, isMain, progress } = require('../helpers')

const OFFICIAL_DRIVERS_LINK = 'https://panasonic.net/cns/pcc/support/fax/common/table/linuxdriver.html'

const installDependenciesAndScannerSupporting = progress(async function installDependenciesAndScannerSupporting () {
  await sh(`
sudo pacman -S cups
sudo systemctl start cups.service
sudo systemctl enable cups.service
sudo usermod -a -G sys $USER
sudo systemctl restart cups.service
yay -S panasonic-mfp
sudo pacman -S simple-scan
sudo pacman -S system-config-printer
sudo pacman -S ghostscript
`)
})

const installOfficialPrinterDriver = progress(async function installOfficialPrinterDriver () {
  const { data } = await axios.get(OFFICIAL_DRIVERS_LINK)
  const dom = new JSDOM(data)

  // also works witn Arch linux despite of Ubuntu label
  const linkToPrinterDriver = [...dom.window.document.querySelectorAll('td')]
    .find(td => td.textContent.includes('Ubuntu 64bit'))
    .parentNode
    .querySelector('td a')
    .href
  console.log(`linkToPrinterDriver: "${linkToPrinterDriver}"`)
  const folderName = linkToPrinterDriver.match(/\/([^/]*)\.tar\.gz$/)[1]

  await sh(`
wget ${linkToPrinterDriver} -O $HOME/${folderName}.tar.gz
tar -xvzf $HOME/${folderName}.tar.gz -C $HOME
rm -rf $HOME/${folderName}.tar.gz
sudo $HOME/${folderName}/install-driver
rm -rf $HOME/${folderName}
`)
})

module.exports = progress(async function installPanasonicScanerAndPrinterDrivers () {
  if (isMain) {
    return
  }

  await installDependenciesAndScannerSupporting()
  await installOfficialPrinterDriver()
})
