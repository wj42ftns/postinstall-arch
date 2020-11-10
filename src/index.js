const setUpSystem = require('./actions/setUpSystem')
const enableServices = require('./actions/enableServices')
const installPacmanPrograms = require('./actions/installPacmanPrograms/index')
const installYayPrograms = require('./actions/installYayPrograms/index')
const cleanUp = require('./actions/cleanUp')

// used some of this script: https://github.com/exah-io/arch-linux/blob/master/2_base.sh

// @TODO separate "main" and "casual" versions

async function main () {
  await setUpSystem()
  await installPacmanPrograms()
  await installYayPrograms()
  await enableServices()
  await cleanUp()
}

main()
