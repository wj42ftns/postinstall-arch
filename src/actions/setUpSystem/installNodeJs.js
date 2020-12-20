const maxBy = require('lodash/maxBy')
const { addInShrc, sh, hasErr, hasNotErr } = require('../../helpers')

async function getLastNvmVersion () {
  const versions = (await sh('git ls-remote --tags https://github.com/nvm-sh/nvm.git')).stdout
    .flatMap(chank => chank.split('\n'))
    .map(line => {
      const match = line.match(/^.*tags\/v(\d+\.\d+\.\d+)/)
      return match && match[1]
    })
    .filter(Boolean)
  const latestVersion = maxBy(versions, string => {
    const coefficient = 100000
    const [major, minor, patch] = string.split('.').map(Number)
    return major * coefficient ** 2 + minor * coefficient + patch
  })

  return latestVersion
}

async function addMetaToRcFiles () {
  const meta = `export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion`

  await addInShrc(meta, { comment: '# NVM stuff' })
}

async function installNvm () {
  const version = await getLastNvmVersion()
  await sh(`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v${version}/install.sh | bash`)
  await addMetaToRcFiles()
}

async function getLatestLtsNode () {
  const res = await sh(`
  . $HOME/.nvm/nvm.sh
  nvm ls-remote
`)
  const ltsVersions = res.stdout
    .filter(line => line.includes('Latest LTS:'))
    .map(line => line.match(/v\d+\.\d+\.\d+/)[0])
  const latestLTSVersion = ltsVersions[ltsVersions.length - 1]

  return latestLTSVersion
}

async function installNode (latestLTSVersion) {
  await sh(`
. $HOME/.nvm/nvm.sh
nvm install ${latestLTSVersion}
nvm alias default ${latestLTSVersion}
npm install -g npm
`)
}

async function installGlobalNpmPackages () {
  const globalNpmPackagesList = ['pkg', 'svgo'].join(' ')
  await sh(`npm install -g ${globalNpmPackagesList}`)
}

async function removeOldNodeAndNpmWithoutNvm () {
  if ((await hasNotErr('npm --version'))) {
    await sh(`pacman -Ss npm --noconfirm`)
  }
  if ((await hasNotErr('node --version'))) {
    await sh(`pacman -Ss nodejs --noconfirm`)
  }
}

module.exports = async function installNodeJs () {
  const res = await sh(`
. $HOME/.nvm/nvm.sh
nvm --version
`)


  if (res.code !== 0) {
    await removeOldNodeAndNpmWithoutNvm()
    await installNvm()
  }



  const latestLTSVersion = await getLatestLtsNode()
  if ((await hasErr('node --version')) || latestLTSVersion !== (await sh('node --version')).stdout.toString()) {
    await installNode(latestLTSVersion)
  }

  await installGlobalNpmPackages()
}
