const childProcess = require('child_process')

// https://stackoverflow.com/questions/27458502/how-to-run-interactive-shell-command-inside-node-js

const spawn = (cmd, args, options) => {
  // @TODO для err вывода сделать как-то по другому, чтобы ошибки было видно.
  const onData = data => {
    const dataPart = data.toString().trim()
    if (dataPart) {
      console.log(dataPart)
    }
  }

  return new Promise((resolve, reject) => {
    const subProcess = childProcess.spawn(cmd, args, options)
    subProcess.stdout.on('data', onData)
    subProcess.stderr.on('data', onData)
    subProcess.on('error', reject)
    subProcess.on('close', resolve)
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

async function sandbox () {
  const aptInstall = await spawn.string('apt install baobab -y')
  await spawn('echo',  ['test', '42 with spaces'])
  const result = await spawn.string('baobab --version')
}

function main () {
  sandbox()
}

main()
