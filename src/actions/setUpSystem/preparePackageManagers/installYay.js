const os = require('os')
const { sh, hasNotErr } = require('../../../helpers')

module.exports = async function installYay () {
  if (await hasNotErr('yay --version')) {
    // already installed
    return
  }

  const yayDependenciesList = [
    'base-devel', // system development tools
    'git', // cli downloading repositories
    'wget', // cli file downloader
    'yajl' // cli json parser
  ].join(' ')

  const tmpDir = os.tmpdir()
  await sh(`
sudo pacman -S ${yayDependenciesList} --noconfirm --needed
rm -rf ${tmpDir}/yay
cd ${tmpDir}
git clone https://aur.archlinux.org/yay.git yay
cd yay
makepkg -si --noconfirm --needed
rm -rf ${tmpDir}/yay
`)
}
