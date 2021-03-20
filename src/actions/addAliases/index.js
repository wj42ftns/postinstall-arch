const { hasNotErr, addInShrc, createFile } = require('../../helpers')
const { path, getBody } = require('./customAliasesRawFile')

const createCustomAliases = async function createCustomAliases () {
  if (await hasNotErr(`sudo stat ${path}`)) {
    return
  }

  await createFile(path, getBody())
}

module.exports = async function addAliases () {
  await createCustomAliases()
  await addInShrc(`source ${path}`)
}
