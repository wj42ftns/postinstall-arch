const { createFile } = require('../../helpers')
const { path, getBody } = require('./xfceRawFiles/xfce4Notifyd')

module.exports = async function addNotificationsSettings () {
  await createFile(path, getBody())
}