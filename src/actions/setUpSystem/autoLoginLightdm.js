const os = require('os')
const { sh, hasErr, progress } = require('../../helpers')

module.exports = progress(async function autoLoginLightdm () {
  if (await hasErr('sudo stat /etc/lightdm/lightdm.conf')) {
    return
  }

  const userName = os.userInfo().username
  await sh(`
    sudo sed -i 's/#autologin-user=/autologin-user=${userName}/' /etc/lightdm/lightdm.conf
    sudo sed -i 's/#autologin-user-timeout=0/autologin-user-timeout=1 #(with 0 may not work)/' /etc/lightdm/lightdm.conf
    sudo groupadd -r autologin
    sudo gpasswd -a $USER autologin
  `)
})
