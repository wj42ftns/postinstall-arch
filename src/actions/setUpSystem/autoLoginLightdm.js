const os = require('os')
const { sh, hasErr, appendToFileIfHasNot } = require('../../helpers')

module.exports = async function autoLoginLightdm () {
  if (await hasErr('sudo stat /etc/lightdm/lightdm.conf')) {
    return
  }

  const userName = os.userInfo().username
  const expectedAutoLoginUser = `autologin-user=${userName}`
  const regexp = new RegExp(`/^${expectedAutoLoginUser}/`)
  const isAdded = await appendToFileIfHasNot('/etc/lightdm/lightdm.conf', expectedAutoLoginUser, {
    regexp
  })

  if (isAdded) {
    await sh(`
      sudo groupadd -r autologin
      sudo gpasswd -a $USER autologin
    `)
  }
}
