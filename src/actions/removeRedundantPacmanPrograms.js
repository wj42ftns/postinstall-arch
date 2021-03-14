const { sh, progress } = require('../helpers')
module.exports = progress(async function removeRedundantPacmanPrograms () {
  const pacmanProgramList = [
    'mousepad',
    'xterm',
    'xfce4-terminal',
    'parole'
    // '',
  ].filter(Boolean).join(' ')
  await sh(`sudo pacman -Rs ${pacmanProgramList} --noconfirm --needed`)
})
