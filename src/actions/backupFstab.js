const { sh, hasNotErr } = require('../helpers')

module.exports = async function backupFstab () {
  if (await hasNotErr('sudo stat /etc/fstab.bak')) {
    return
  }

  await sh(`sudo cp /etc/fstab /etc/fstab.bak`)
}

