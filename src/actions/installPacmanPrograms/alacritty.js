const { sh, hasErr } = require('../../helpers')

exports.setUpAlacritty = async function setUpAlacritty () {
  if (await hasErr('alacritty --version')) {
    return
  }

  await sh(`
mkdir -p $HOME/.config/alacritty/
rm -rf $HOME/.config/alacritty/alacritty.yml
touch $HOME/.config/alacritty/alacritty.yml
tee -a $HOME/.config/alacritty/alacritty.yml << EOF
env:
  TERM: alacritty
  LANG: "en_US.UTF-8"
  LC_CTYPE: en_US.UTF-8
window:
  dimensions:
    columns: 113
    lines: 31
  position:
    x: 0
    y: 0
font:
  normal:
    style: Regular
  size: 14.0
  use_thin_strokes: true
colors:
  name: Paraiso (light)
  author: Chris Kempson
  primary:
    background: "#e7e9db"
    foreground: "#4f424c"
  cursor:
    text: "#e7e9db"
    cursor: "#4f424c"
  normal:
    black: "#2f1e2e"
    red: "#ef6155"
    green: "#48b685"
    yellow: "#fec418"
    blue: "#06b6ef"
    magenta: "#815ba4"
    cyan: "#5bc4bf"
    white: "#a39e9b"
  bright:
    black: "#776e71"
    red: "#ef6155"
    green: "#48b685"
    yellow: "#fec418"
    blue: "#06b6ef"
    magenta: "#815ba4"
    cyan: "#5bc4bf"
    white: "#e7e9db"
EOF
`)
}

exports.ALACRITY = 'alacritty'
