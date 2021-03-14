const { sh, hasNotErr, progress } = require('../../helpers')

module.exports = progress(async function backupFstab () {
  if (await hasNotErr('sudo stat /etc/fstab.bak')) {
    return
  }

  await sh(`sudo cp /etc/fstab /etc/fstab.bak`)
})

