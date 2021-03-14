const { sh, progress } = require('../helpers')

module.exports = progress(async function installYayPrograms () {
  // clean up all redundant dependencies
  await sh(`
sudo pacman -Sc --noconfirm
yay -Sc --noconfirm
yay -Yc --noconfirm
`)
})
