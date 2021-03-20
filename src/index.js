const setUpSystem = require('./actions/setUpSystem/index')
const setUpXfce = require('./actions/setUpXfce/index')
const enableServices = require('./actions/enableServices/index')
const installPacmanPrograms = require('./actions/installPacmanPrograms/index')
const removeRedundantPacmanPrograms = require('./actions/removeRedundantPacmanPrograms')
const installYayPrograms = require('./actions/installYayPrograms/index')
const addCustomScripts = require('./actions/addCustomScripts/index')
const addAutostartProgramms = require('./actions/addAutostartProgramms/index')
const cleanUp = require('./actions/cleanUp')
const installPanasonicScanerAndPrinterDrivers = require('./actions/installPanasonicScanerAndPrinterDrivers')
const { positiveInfo } = require('./helpers')

// used some of this script: https://github.com/exah-io/arch-linux/blob/master/2_base.sh

async function main () {
  await setUpSystem()
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
  await removeRedundantPacmanPrograms()
  positiveInfo('removeRedundantPacmanPrograms finished.')

  positiveInfo('-'.repeat(31))
  positiveInfo('|       SCRIPT FINISHED       |')
  positiveInfo('-'.repeat(31))
}

main()
