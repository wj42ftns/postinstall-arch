const { sh, hasNotErr, isCasual, createFile } = require('../../helpers')

// https://www.oracle.com/java/technologies/javase-downloads.html
// https://www.oracle.com/java/technologies/oracle-java-archive-downloads.html
// https://www.oracle.com/java/technologies/javase/jdk13-archive-downloads.html
// https://jdk.java.net/archive/

const linkToJava = 'https://download.java.net/java/GA/jdk13.0.2/d4173c853231432d94f001e99d882ca7/8/GPL/openjdk-13.0.2_linux-x64_bin.tar.gz'
const majorVersion = '13'
const folderName = `jdk-${majorVersion}.0.2`

module.exports = async function installZsh () {
  if (isCasual || await hasNotErr('which java') || await hasNotErr(`sudo stat /opt/${folderName}`)) {
    return
  }

  const path = `/etc/profile.d/openjdk${majorVersion}.sh`
  const body = `
 export JAVA_HOME="/opt/${folderName}"
 export PATH="$PATH:\${JAVA_HOME}/bin"
 `


  await sh(`
wget ${linkToJava} -O $HOME/${folderName}.tar.gz
tar -xvzf $HOME/${folderName}.tar.gz -C $HOME
rm -rf $HOME/${folderName}.tar.gz
sudo mv $HOME/${folderName} /opt/${folderName}
`)
  await createFile(path, body, true)
}
