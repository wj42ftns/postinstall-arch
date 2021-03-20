const { createFile, isCasual, isMain } = require('../../helpers')
const { path: slackPath, body: slackBody } = require('./autostartMeta/slack')
const { path: onLoginPath, body: onLoginBody } = require('./autostartMeta/onLoginCustomScript')
const { path: skypePath, body: skypeBody } = require('./autostartMeta/skype')
const { path: birdtrayPath, body: birdtrayBody } = require('./autostartMeta/birdtray')
const { path: redshiftPath, body: redshiftBody } = require('./autostartMeta/redshift')

module.exports = async function addAutostartProgramms () {
  await createFile(slackPath, slackBody)
  await createFile(onLoginPath, onLoginBody)
  if (isCasual) {
    // https://habr.com/ru/post/483846/ about hiding window from cli
    await createFile(skypePath, skypeBody)
  }
  if (isMain) {
    await createFile(birdtrayPath, birdtrayBody)
    await createFile(redshiftPath, redshiftBody)
  }
}
