const setUpSystem = require('./actions/setUpSystem')
const enableServices = require('./actions/enableServices')
const installPacmanPrograms = require('./actions/installPacmanPrograms/index')
const removeRedundantPacmanPrograms = require('./actions/removeRedundantPacmanPrograms')
const installYayPrograms = require('./actions/installYayPrograms/index')
const addAliases = require('./actions/addAliases')
const cleanUp = require('./actions/cleanUp')
const installPanasonicScanerAndPrinterDrivers = require('./actions/installPanasonicScanerAndPrinterDrivers')
const { positiveInfo } = require('./helpers')

// used some of this script: https://github.com/exah-io/arch-linux/blob/master/2_base.sh

async function main () {
  await setUpSystem()
  positiveInfo('setUpSystem finished.')
  await installPacmanPrograms()
  positiveInfo('installPacmanPrograms finished.')
  await removeRedundantPacmanPrograms()
  positiveInfo('removeRedundantPacmanPrograms finished.')
  await installYayPrograms()
  positiveInfo('installYayPrograms finished.')
  await enableServices()
  positiveInfo('enableServices finished.')
  await cleanUp()
  positiveInfo('cleanUp finished.')
  await addAliases()
  positiveInfo('cleanUp finished.')
  await installPanasonicScanerAndPrinterDrivers() // Panasonic KX-M1500
  positiveInfo('installPanasonicScanerAndPrinterDrivers finished.')

  positiveInfo('-'.repeat(31))
  positiveInfo('|       SCRIPT FINISHED       |')
  positiveInfo('-'.repeat(31))
}

main()
