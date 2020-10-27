function promisifyStream (stream) {
  return new Promise((resolve, reject) => {
    stream.on('end', () => resolve())
    stream.on('error', reject) // or something like that. might need to close `hash`
  })
}

module.exports = promisifyStream