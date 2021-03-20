const { createFile } = require('../../helpers')
const { path, body } = require('./xfceRawFiles/xfce4PowerManager')

module.exports = async function addPowerManagerSettings () {
  await createFile(path, body)
}