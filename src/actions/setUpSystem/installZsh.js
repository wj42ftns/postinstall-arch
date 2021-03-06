const { sh, hasNotErr } = require('../../helpers')

module.exports = async function installZsh () {
  if (await hasNotErr('zsh --version')) {
    return
  }

  await sh(`
sudo pacman -S zsh zsh-completions --noconfirm --needed
chsh -s /usr/bin/zsh
`)
}
