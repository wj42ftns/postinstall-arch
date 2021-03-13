const setUpSystem = require('./actions/setUpSystem')
const enableServices = require('./actions/enableServices')
const installPacmanPrograms = require('./actions/installPacmanPrograms/index')
const removeRedundantPacmanPrograms = require('./actions/removeRedundantPacmanPrograms')
const installYayPrograms = require('./actions/installYayPrograms/index')
const addAliases = require('./actions/addAliases')
const cleanUp = require('./actions/cleanUp')

// used some of this script: https://github.com/exah-io/arch-linux/blob/master/2_base.sh

// @TODO separate "main" and "casual" versions

async function main () {
  await setUpSystem()
  await installPacmanPrograms()
  await removeRedundantPacmanPrograms()
  await installYayPrograms()
  await enableServices()
  await cleanUp()
  await addAliases()

  console.log('Successful finish!')
}

main()
