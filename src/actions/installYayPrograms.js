const { sh } = require('../helpers')

module.exports = async function installYayPrograms () {
  const yayProgramList = [
    // ########################
    // #       Internet       #
    // ########################
    'google-chrome', // gui web browser
    'skypeforlinux-stable-bin', // online calls
    'slack-desktop', // online calls
    'zoom'
    // '',
  ].join(' ')
  await sh(`yay -S ${yayProgramList} --noconfirm --needed`)
}