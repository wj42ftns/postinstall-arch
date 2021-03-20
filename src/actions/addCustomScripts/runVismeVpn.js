exports.path = '$HOME/.customScripts/runVismeVpn.js'
exports.body = `
const { spawn } = require('child_process')

let isFirstUrl = true
const runVismeVpn = () => {
  const subProcess = spawn('/bin/sh', ['-c', 'sudo openvpn --config ~/.vpn/visme.ovpn'])
  const getOnDataFn = stdName => srcData => {
    process[stdName].write(srcData)
    const data = srcData.trim()
    const match = data.match(/https:\\/\\/visme.openvpn.*id=visme/)
    const url = match && match[0]
    if (url && isFirstUrl) {
      isFirstUrl = false
      spawn('/bin/sh', ['-c', \\\`firefox "\\\${url}"\\\`])
    }
  }

  const stds = ['stdout', 'stderr']
  for (const std of stds) {
    if (subProcess[std]) {
      subProcess[std].setEncoding('utf8')
      subProcess[std].on('data', getOnDataFn(std))
    }
  }
}

runVismeVpn()`