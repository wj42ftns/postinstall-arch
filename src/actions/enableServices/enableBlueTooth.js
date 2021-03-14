const { sh, hasNotErr, progress } = require('../../helpers')

module.exports = progress(async function enableBlueTooth () {
  if (await hasNotErr('systemctl status bluetooth.service')) {
    return
  }

  await sh(`
sudo systemctl enable bluetooth.service
sudo systemctl start bluetooth.service
`)
})
