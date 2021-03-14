const enableBlueTooth = require('./enableBlueTooth')
const { progress } = require('../../helpers')

module.exports = progress(async function enableServices () {
  await enableBlueTooth()
})