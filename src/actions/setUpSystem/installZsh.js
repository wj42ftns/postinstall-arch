const { sh, hasNotErr, progress } = require('../../helpers')

module.exports = progress(async function installZsh () {
  if (await hasNotErr('zsh --version')) {
    return
  }

  await sh(`
sudo pacman -S zsh zsh-completions --noconfirm --needed
chsh -s /usr/bin/zsh
`)
})
