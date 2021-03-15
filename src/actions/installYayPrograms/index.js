const { sh, isCasual, isMain } = require('../../helpers')
const { setUpSublimeText, SUBLIME_TEXT } = require('./sublimeText')
const { setUpRedshift, REDSHIFT_GTK } = require('./redshift')

module.exports = async function installYayPrograms () {
  const yayProgramList = [
    // ######################
    // #       System       #
    // ######################
    isMain && 'mytetra', // gui pim manager,
    SUBLIME_TEXT, // gui text-editor
    isMain && REDSHIFT_GTK, // shift screen highlight to yellow zone
    // #####################
    // #       Media       #
    // #####################
    'xnviewmp', // images viewer and editor
    // ########################
    // #       Internet       #
    // ########################
    'google-chrome', // gui web browser
    isCasual && 'skypeforlinux-stable-bin', // online calls
    'slack-desktop', // online calls
    'zoom', // online calls
    'anydesk-bin', // remote control
    // ###########################
    // #       Programming       #
    // ###########################
    isMain && 'intellij-idea-ultimate-edition' // IDE
    // '',
  ].filter(Boolean).join(' ')
  await sh(`yay -S ${yayProgramList} --noconfirm --needed`)
  setUpSublimeText()
  setUpRedshift()
}
