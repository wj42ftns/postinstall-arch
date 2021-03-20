const { hasErr, createFile } = require('../../../helpers')
const { path, body } = require('./alacrityConfigRawFile')

exports.setUpAlacritty = async function setUpAlacritty () {
  if (await hasErr('alacritty --version')) {
    return
  }

  await createFile(path, body)
}

exports.ALACRITY = 'alacritty'
