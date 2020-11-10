const { sh, hasNotErr } = require('../../helpers')

exports.setUpAlacritty = async function setUpAlacritty () {
  if (await hasNotErr('alacritty --version')) {
    return
  }

  await sh(`
mkdir -p ~/.config/alacritty/
wget -P ~/.config/alacritty/ https://raw.githubusercontent.com/exah-io/minimal-arch-linux/master/dotfiles/alacritty/alacritty.yml
`)
}

exports.ALACRITY = 'alacritty'
