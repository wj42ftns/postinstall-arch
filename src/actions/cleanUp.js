const { sh } = require('../helpers')

module.exports = async function installYayPrograms () {
  // clean up all redundant dependencies
  await sh(`
sudo pacman -Sc --noconfirm
yay -Sc --noconfirm
yay -Yc --noconfirm
`)
}
