const { createFile } = require('../../helpers')
const { path, body } = require('./xfceRawFiles/xfce4KeyboardShortcuts')

module.exports = async function addShortcuts () {
  await createFile(path, body)
}