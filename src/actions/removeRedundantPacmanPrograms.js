const { sh, positiveInfo } = require('../helpers')
module.exports = async function removeRedundantPacmanPrograms () {
  const pacmanProgramList = [
    'mousepad',
    'xterm',
    'xfce4-terminal',
    'parole'
    // '',
  ].filter(Boolean)

  for (const programmName of pacmanProgramList) {
    await sh(`sudo pacman -Rs ${programmName} --noconfirm --needed`)
    positiveInfo(`${programmName} removed.`)
  }
}
