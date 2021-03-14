const { hasErr, hasNotErr, fileContains, appendToFileIfHasNot, sh, progress } = require('./helpers') // eslint-disable-line
const os = require('os') // eslint-disable-line
// const axios = require('axios')
// const { JSDOM } = require("jsdom")


const test = progress(function functionName () {
  console.log(`|42| 1`)
  console.log(`|42| functionName.name ->    `, functionName.name)
})

const test2 = progress(async function asyncFunction () {
  await new Promise((resolve) => setTimeout(resolve, 300))
  console.log(`|42| 2`)
})

const main = progress(async function main () {
  test()
  await test2()
  // const result = await sh('node --version')
  // console.log(result)

  // require('fs').writeFileSync('/tmp/firefox.png', base64Data, 'base64')
//
//   const { data } = await axios.get('https://panasonic.net/cns/pcc/support/fax/common/table/linuxdriver.html')
//   const dom = new JSDOM(data)
//
//   // also works witn Arch linux despite of Ubuntu label
//   const linkToPrinterDriver = [...dom.window.document.querySelectorAll('td')]
//     .find(td => td.textContent.includes('Ubuntu 64bit'))
//     .parentNode
//     .querySelector('td a')
//     .href
//   console.log(`linkToPrinterDriver: "${linkToPrinterDriver}"`)
//   const folderName = linkToPrinterDriver.match(/\/([^/]*)\.tar\.gz$/)[1]
//
//   await sh(`
// wget ${linkToPrinterDriver} -O $HOME/${folderName}.tar.gz
// tar -xvzf $HOME/${folderName}.tar.gz -C $HOME
// rm -rf $HOME/${folderName}.tar.gz
// sudo $HOME/${folderName}/install-driver
// rm -rf $HOME/${folderName}
// `)
})

main()
