const preparePackageManagers = require('./preparePackageManagers')
const installGPUDrivers = require('./installGPUDrivers')
const installZsh = require('./installZsh')
const installNodeJs = require('./installNodeJs')
// const autoLogin = require('./autoLogin/index.js')
// const addingLocalization = require('./addingLocalization')

module.exports = async function setUpSystem () {
  await preparePackageManagers()
  // await autoLogin()
  await installZsh()
  await installNodeJs()
  await installGPUDrivers()
  // await addingLocalization()
}