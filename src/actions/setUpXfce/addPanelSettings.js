const { createFile } = require('../../helpers')
const { path, body } = require('./xfceRawFiles/xfce4Panel')

module.exports = async function addPanelSettings () {
  await createFile(path, body)
}