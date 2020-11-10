const preparePackageManagers = require('./preparePackageManagers')
const installGPUDrivers = require('./installGPUDrivers')
const installZsh = require('./installZsh')
const installNodeJs = require('./installNodeJs')
const addingLocalization = require('./addingLocalization')

module.exports = async function setUpSystem () {
  await preparePackageManagers()
  await installZsh()
  await installNodeJs()
  await installGPUDrivers()
  await addingLocalization()
}