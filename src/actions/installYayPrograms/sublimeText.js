const { appendToFileIfHasNot } = require('../../helpers')

exports.setUpSublimeText = async function installYayPrograms () {
  await appendToFileIfHasNot('/etc/hosts', '127.0.0.1 www.sublimetext.com', {
    comment: '# fix update notification for sublime-text-3'
  })
}


exports.SUBLIME_TEXT = 'sublime-text-3'