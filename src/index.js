const setUpSystem = require('./actions/setUpSystem')
const enableServices = require('./actions/enableServices')
const installPacmanPrograms = require('./actions/installPacmanPrograms/index')
const installYayPrograms = require('./actions/installYayPrograms/index')
const installFlatpakPrograms = require('./actions/installFlatpakPrograms')
const addAliases = require('./actions/addAliases')
const cleanUp = require('./actions/cleanUp')

// used some of this script: https://github.com/exah-io/arch-linux/blob/master/2_base.sh

// @TODO separate "main" and "casual" versions

async function main () {
  await setUpSystem()
  await installPacmanPrograms()
  await installYayPrograms()
  await installFlatpakPrograms()
  await enableServices()
  await cleanUp()
  await addAliases()
}

main()
