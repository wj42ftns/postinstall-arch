const { sh, isCasual, isMain, positiveInfo } = require('../../helpers')
const { setUpSublimeText, SUBLIME_TEXT } = require('./sublimeText')
const { setUpRedshift, REDSHIFT_GTK } = require('./redshift')

module.exports = async function installYayPrograms () {
  const yayProgramList = [
    // ######################
    // #       System       #
    // ######################
    'timeshift',
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
    isMain && 'openvpn-update-resolv-conf', // need for openvpn: https://wiki.archlinux.org/index.php/OpenVPN#The_update-resolv-conf_custom_script
    isCasual && 'skypeforlinux-stable-bin gnome-keyring', // or skypeforlinux-preview-bin // - online calls - gnome-keyring need to avoid auto log out from skype
    isMain && 'birdtray', // showing thunderbird in tray
    'slack-desktop', // online calls
    'zoom', // online calls
    'anydesk-bin', // remote control
    // ###########################
    // #       Programming       #
    // ###########################
    isMain && 'intellij-idea-ultimate-edition' // IDE
    // '',
  ].filter(Boolean)
  for (const programmName of yayProgramList) {
    await sh(`yay -S ${programmName} --noconfirm --needed`)
    positiveInfo(`${programmName} installed.`)
  }

  setUpSublimeText()
  setUpRedshift()
}
