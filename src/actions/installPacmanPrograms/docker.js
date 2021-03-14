const { sh, hasErr, isCasual } = require('../../helpers')

exports.setUpDocker = async function setUpDocker () {
  if (isCasual || await hasErr('docker --version')) {
    return
  }

  await sh(`
  sudo systemctl enable docker
  sudo systemctl start docker
  sudo groupadd docker
  sudo usermod -aG docker $USER
  `)
}

exports.DOCKER = 'docker'
