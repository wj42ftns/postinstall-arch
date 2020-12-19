const os = require('os')
const { sh, hasErr, appendToFileIfHasNot } = require('../../helpers')

module.exports = async function fixGrubForRu () {
  if (await hasErr('sudo stat /etc/lightdm/lightdm.conf')) {
    return
  }

  // @TODO

  // await appendToFileIfHasNot('/etc/lightdm/lightdm.conf', `autologin-user=${os.userInfo().homedir}`, {
  //   regexp: /^autologin-user=/m
  // })

  // await appendToFileIfHasNot('/etc/lightdm/lightdm.conf', 'autologin-user-timeout=0', {
  //   regexp: /^autologin-user-timeout=0/m
  // })

  //   await sh(`
  // mkdir -p /boot/grub/locale
  // sudo cp /usr/share/locale/ru/LC_MESSAGES/grub.mo /etc/lightdm/lightdm.conf

  // systemctl enable lightdm.service && systemctl start lightdm.service
  // `)
}
