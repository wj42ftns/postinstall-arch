const { createFile } = require('../../helpers')
const { path: mimeinfoCachePath, body: mimeinfoCacheBody } = require('./mimeinfoCache')
const { path: mimeappsListPath, body: mimeappsListBody } = require('./mimeappsList')

module.exports = async function updateFileAssociations () {
  await createFile(mimeinfoCachePath, mimeinfoCacheBody, true)
  await createFile(mimeappsListPath, mimeappsListBody, true)
}