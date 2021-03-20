const { createFile } = require('../../helpers')
const { path, body } = require('./xfceRawFiles/keyboardLayout')

module.exports = async function addKeyboardLayout () {
  await createFile(path, body)
}