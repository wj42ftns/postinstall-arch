const { sh } = require('../helpers')
module.exports = async function removeRedundantPacmanPrograms () {
  const pacmanProgramList = [
    'mousepad',
    'xterm',
    'xfce4-terminal',
    'parole'
    // '',
  ].filter(Boolean).join(' ')
  await sh(`sudo pacman -Rs ${pacmanProgramList} --noconfirm --needed`)
}
