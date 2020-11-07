const fixGrubForRu = require('./fixGrubForRu')
const preparePackageManagers = require('./preparePackageManagers')
const installGPUDrivers = require('./installGPUDrivers')
const installZsh = require('./installZsh')
const installNodeJs = require('./installNodeJs')

module.exports = async function setUpSystem () {
  await fixGrubForRu()
  await preparePackageManagers()
  await installZsh()
  await installNodeJs()
  installGPUDrivers()
}