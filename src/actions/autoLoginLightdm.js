const os = require('os')
const { sh, hasErr, isMain } = require('../helpers')

const DELAY = isMain ? 1 : 5

module.exports = async function autoLoginLightdm () {
  if (await hasErr('sudo stat /etc/lightdm/lightdm.conf')) {
    return
  }

  const userName = os.userInfo().username
  await sh(`
    sudo sed -i 's/#autologin-user=/autologin-user=${userName}/' /etc/lightdm/lightdm.conf
    sudo sed -i 's/#autologin-user-timeout=0/autologin-user-timeout=${DELAY}/' /etc/lightdm/lightdm.conf
    sudo groupadd -r autologin
    sudo gpasswd -a $USER autologin
  `)
}
