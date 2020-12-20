const preparePackageManagers = require('./preparePackageManagers')
const installGPUDrivers = require('./installGPUDrivers')
const installZsh = require('./installZsh')
const installNodeJs = require('./installNodeJs')
const autoLoginLightdm = require('./autoLoginLightdm')
const updateGrubTimer = require('./updateGrubTimer')

module.exports = async function setUpSystem () {
  await preparePackageManagers()
  await autoLoginLightdm()
  await updateGrubTimer()
  await installZsh()
  await installNodeJs()
  await installGPUDrivers()
}