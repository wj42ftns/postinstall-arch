/* eslint-disable */
const chalk = require('chalk')
const { hasErr, hasNotErr, fileContains, appendToFileIfHasNot, sh, createFile } = require('./helpers')
const os = require('os')
const axios = require('axios')
const { JSDOM } = require("jsdom")
/* eslint-enable */

const main = async function main () {
  console.log(chalk.bold.cyan('test 1'))
  console.log(chalk.bold.green('test 2'))
  console.log(chalk.bold.cyanBright('test 2'))
  console.log(chalk.bold.visible('test 3'))
  //
}

main()
