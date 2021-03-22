const preparePackageManagers = require('./actions/preparePackageManagers')
const tryToUpdateSystem = require('./actions/tryToUpdateSystem')
const installGPUDrivers = require('./actions/installGPUDrivers')
const installZsh = require('./actions/installZsh')
const installJavaForIdea = require('./actions/installJavaForIdea')
const installNodeJs = require('./actions/installNodeJs')
const autoLoginLightdm = require('./actions/autoLoginLightdm')
const updateGrubTimer = require('./actions/updateGrubTimer')
const backupFstab = require('./actions/backupFstab')
const updateEtcHosts = require('./actions/updateEtcHosts')
const addSwap = require('./actions/addSwap')
const setUpXfce = require('./actions/setUpXfce/index')
const enableServices = require('./actions/enableServices/index')
const installPacmanPrograms = require('./actions/installPacmanPrograms/index')
// const removeRedundantPacmanPrograms = require('./actions/removeRedundantPacmanPrograms')
const installYayPrograms = require('./actions/installYayPrograms/index')
const addCustomScripts = require('./actions/addCustomScripts/index')
const addAutostartProgramms = require('./actions/addAutostartProgramms/index')
const cleanUp = require('./actions/cleanUp')
const installPanasonicScanerAndPrinterDrivers = require('./actions/installPanasonicScanerAndPrinterDrivers')
const updateFileAssociations = require('./actions/updateFileAssociations/index')
const { positiveInfo } = require('./helpers')

// used some of this script: https://github.com/exah-io/arch-linux/blob/master/2_base.sh

async function main () {
  await preparePackageManagers()
  positiveInfo('preparePackageManagers finished.')
  await tryToUpdateSystem()
  positiveInfo('tryToUpdateSystem finished.')
  await installZsh()
  positiveInfo('installZsh finished.')
  await installGPUDrivers()
  positiveInfo('installGPUDrivers finished.')
  await installJavaForIdea()
  positiveInfo('installJavaForIdea finished.')
  await updateEtcHosts()
  positiveInfo('updateEtcHosts finished.')
  await backupFstab()
  positiveInfo('backupFstab finished.')
  await addSwap()
  positiveInfo('addSwap finished.')
  await autoLoginLightdm()
  positiveInfo('autoLoginLightdm finished.')
  await updateGrubTimer()
  positiveInfo('updateGrubTimer finished.')
  await installNodeJs()
  positiveInfo('installNodeJs finished.')
  positiveInfo('setUpSystem finished.')
  await setUpXfce()
  positiveInfo('setUpXfce finished.')
  await addCustomScripts()
  positiveInfo('addCustomScripts finished.')
  await addAutostartProgramms()
  positiveInfo('addAutostartProgramms finished.')
  await installPacmanPrograms()
  positiveInfo('installPacmanPrograms finished.')
  await installYayPrograms()
  positiveInfo('installYayPrograms finished.')
  await enableServices()
  positiveInfo('enableServices finished.')
  await cleanUp()
  positiveInfo('cleanUp finished.')
  await installPanasonicScanerAndPrinterDrivers() // Panasonic KX-M1500
  positiveInfo('installPanasonicScanerAndPrinterDrivers finished.')
  // await removeRedundantPacmanPrograms()
  // positiveInfo('removeRedundantPacmanPrograms finished.')
  await updateFileAssociations()
  positiveInfo('updateFileAssociations finished.')

  positiveInfo('-'.repeat(31))
  positiveInfo('|       SCRIPT FINISHED       |')
  positiveInfo('-'.repeat(31))
}

main()
