const childProcess = require('child_process')

const spawn = (cmd, args, options) => {
  return new Promise((resolve, reject) => {
    const subProcess = childProcess.spawn(cmd, args, { stdio: 'inherit' })
    // subProcess.stdout.on('data', onData)
    // subProcess.stderr.on('data', onData)
    subProcess.on('error', reject)
    subProcess.on('close', resolve)
    // subProcess.stdin.write('yes\n')
  })
}
spawn.string = (cmdWithArgs, options) => {
  const escapedSpaceMark = '_%%%SPACE%%%_'
  const [cmd, ...args] = cmdWithArgs
    .replace(/\\ /g, escapedSpaceMark)
    .split(' ')
    .map(item => item.replace(new RegExp(escapedSpaceMark, 'g'), ' '))
  return spawn(cmd, args, options)
}

module.exports = spawn
