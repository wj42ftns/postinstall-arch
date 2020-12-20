const { hasErr, hasNotErr, fileContains, appendToFileIfHasNot, sh } = require('./helpers')
const os = require('os')


async function main () {
  console.log(`|42| os.userInfo() ->    `, os.userInfo().username)
  console.log(`|42| os.userInfo().homedir ->    `, os.userInfo().homedir)
  // const result = await sh('node --version')
  // console.log(result)

  // require('fs').writeFileSync('/tmp/firefox.png', base64Data, 'base64')
}

main()
