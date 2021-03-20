const { hasErr, createFile, isCasual } = require('../../../helpers')
const { path, body } = require('./redshiftConfigRawFile')

exports.setUpRedshift = async function setUpRedshift () {
  if (isCasual || await hasErr('redshift -V')) {
    return
  }

  await createFile(path, body)
}

exports.REDSHIFT_GTK = 'redshift-gtk-git'


