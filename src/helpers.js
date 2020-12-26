const { spawn } = require('child_process')

// https://www.baeldung.com/linux/bash-interactive-prompts
// say yes in interactive script example: await sh('yes | apt remove baobab')
// answer to multiply answers in interactive script example: await sh('printf "bot\nn\nJava" | ./questions.sh')
exports.sh = (instructions, options) => {
  return new Promise(resolve => {
    const result = {
      stdout: [],
      stderr: [],
      code: 0
    }
    const subProcess = spawn('/bin/sh', ['-c', instructions], options)
    const getOnDataFn = stdName => srcData => {
      process[stdName].write(srcData)
      const data = srcData.trim()
      if (data) {
        result[stdName].push(data)
      }
    }

    const stds = ['stdout', 'stderr']
    for (const std of stds) {
      if (subProcess[std]) {
        // if { stdio: 'ignore' } will be null
        subProcess[std].setEncoding('utf8')
        subProcess[std].on('data', getOnDataFn(std))
      }
    }

    const onFinish = code => {
      result.code = code
      resolve(result)
    }
    subProcess.on('error', onFinish)
    subProcess.on('close', onFinish)
    subProcess.on('exit', onFinish)
  })
}

exports.hasNotErr = async command => (await exports.sh(command, { stdio: 'ignore' })).code === 0
exports.hasErr = async command => !(await exports.hasNotErr(command))

exports.fileContains = async (pathToFile, regexp) => {
  const string = (await exports.sh(`cat "${pathToFile}"`, { stdio: 'pipe' })).stdout.toString()

  return typeof regexp === 'string' ? string.includes(regexp) : regexp.test(string)
}

exports.appendToFileIfHasNot = async (
  pathToFile = '',
  string = '',
  { comment = '', addEmptyLineBeforeText = true, regexp = string, sudo = false } = {}
) => {
  if (await exports.fileContains(pathToFile, regexp)) {
    return false
  }

  let preparedString = string
  if (addEmptyLineBeforeText) {
    preparedString = `\n${preparedString}`
  }
  
  if (comment) {
    preparedString = `${comment}\n${preparedString}`
  }

  await exports.fileContains(pathToFile, regexp)
  if (sudo) {
    await exports.sh(`echo '${preparedString}' | sudo tee -a "${pathToFile}"`)
  } else {
    await exports.sh(`echo '${preparedString}' | tee -a "${pathToFile}"`)
  }

  return true
}

exports.addInShrc = async (
  string,
  options
) => {
  if (await exports.hasNotErr(`sudo stat $HOME/.zshrc`)) {
    await exports.appendToFileIfHasNot(`$HOME/.zshrc`, string, options)
  }
  if (await exports.hasNotErr(`sudo stat $HOME/.bashrc`)) {
    await exports.appendToFileIfHasNot(`$HOME/.bashrc`, string, options)
  }
}
