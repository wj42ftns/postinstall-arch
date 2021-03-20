const { addInShrc, createFile } = require('../../helpers')
const { path: onLoginPath, body: onLoginBody } = require('./onLoginCustomScript')
const { path: runVismeVpnPath, body: runVismeVpnPathBody } = require('./runVismeVpn')
const { path: addCustomAliasesPath, getBody: getAddCustomAliasesBody } = require('./customAliases')

const createCustomAliases = async () => {

  await createFile(addCustomAliasesPath, getAddCustomAliasesBody())
  await addInShrc(`source ${addCustomAliasesPath}`)
}

module.exports = async function addCustomScripts () {
  await createFile(onLoginPath, onLoginBody)
  await createFile(runVismeVpnPath, runVismeVpnPathBody)
  await createCustomAliases()
}