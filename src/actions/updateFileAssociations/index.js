const { createFile } = require('../../helpers')
const { path, body } = require('./mimeinfoCache')

module.exports = async function updateFileAssociations () {
  await createFile(path, body, true)
}