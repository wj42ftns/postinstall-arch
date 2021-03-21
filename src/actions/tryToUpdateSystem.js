const { sh, hasErr } = require('../helpers')
const { path } = require('./addCustomScripts/customAliases')

module.exports = async function tryToUpdateSystem () {
  if (await hasErr(`sudo stat ${path}`)) {
    return
  }

  await sh(`
    updateSystem
    cleanUpSystem
  `)
}
