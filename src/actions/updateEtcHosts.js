const { createFile, isMain } = require('../helpers')

const getBody = () => {
  let body = `
127.0.0.1 localhost

# fix update notification for idea
127.0.0.1 https://account.jetbrains.com:443
127.0.0.1 account.jetbrains.com
127.0.0.1 http://www.jetbrains.com
127.0.0.1 www-weighted.jetbrains.com
127.0.0.1 account.jetbrains.com 

# fix update notification for sublime-text-3
127.0.0.1 www.sublimetext.com`
  if (isMain) {
    body += `
    
#visme
127.0.0.1 visme4
127.0.0.1 visme4.co

172.30.1.46 jira.visme.co
172.30.1.46 wiki.visme.co`
  }

  return body
}


module.exports = async function updateEtcHosts () {
  await createFile('/etc/hosts', getBody(), true)
}
