const { sh, hasNotErr } = require('../../helpers')

module.exports = async function fixGrubForRu () {
  if (await hasNotErr('systemctl status bluetooth.service')) {
    return
  }

  await sh(`
sudo systemctl enable bluetooth.service
sudo systemctl start bluetooth.service
  `)
}
