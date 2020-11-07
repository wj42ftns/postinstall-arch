const { hasErr, hasNotErr, fileContains, appendToFileIfHasNot, sh } = require('./helpers')

async function main () {
  const result = await sh('node --version')
  console.log(result)

}

main()
