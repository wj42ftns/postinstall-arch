const { sh } = require('../../helpers')
const { setUpSublimeText, SUBLIME_TEXT } = require('./sublimeText')

module.exports = async function installYayPrograms () {
  const yayProgramList = [
    SUBLIME_TEXT, // gui text-editor
    // ########################
    // #       Internet       #
    // ########################
    'google-chrome', // gui web browser
    'skypeforlinux-stable-bin', // online calls
    'slack-desktop', // online calls
    'zoom', // online calls
    'anydesk-bin' // remote control
    // '',
  ].join(' ')
  await sh(`yay -S ${yayProgramList} --noconfirm --needed`)
  setUpSublimeText()
}
