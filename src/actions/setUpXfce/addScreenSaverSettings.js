const { createFile } = require('../../helpers')
const { path, body } = require('./xfceRawFiles/xfce4Screensaver')

module.exports = async function addScreenSaverSettings () {
  await createFile(path, body)
}