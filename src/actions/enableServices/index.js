const enableBlueTooth = require('./enableBlueTooth')

module.exports = async function enableServices () {
  await enableBlueTooth()
}