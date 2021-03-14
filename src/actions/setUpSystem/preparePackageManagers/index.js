const { sh, progress } = require('../../../helpers')
const installYay = require('./installYay')

module.exports = progress(async function preparePackageManagers () {
  await sh(`
sudo sed -i "/\\[multilib\\]/,/Include/"'s/^#//' /etc/pacman.conf  #Adding multilib support
sudo pacman -Sy archlinux-keyring --noconfirm --needed             #before updating packages need to install it - to avoid some error
sudo pacman -Syu --noconfirm                                       #update pacman packages and system
`)
  await installYay()
  await sh('yay -Syu --noconfirm --devel --timeupdate') // update yay packages
})
