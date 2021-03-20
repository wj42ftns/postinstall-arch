const { createFile } = require('../../helpers')
const { path, body } = require('./xfceRawFiles/xfce4Session')

module.exports = async function addSessionSettings () {
  await createFile(path, body)
}