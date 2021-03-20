const { createFile } = require('../../helpers')
const { path, body } = require('./xfceRawFiles/keyboards')

module.exports = async function addKeyboardLayout () {
  await createFile(path, body)
}