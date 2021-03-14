const { sh, addInShrc, progress } = require('../../helpers')

const getCpuVendor = progress(async function getCpuVendor () {
  return (await sh('cat /proc/cpuinfo | grep vendor | uniq')).stdout.toString().replace(/^.*: /, '')
})

module.exports = progress(async function installGPUDrivers () {
  const GPUDriversList = [
    // common gpu drivers
    'mesa',
    'lib32-mesa',
    'vulkan-icd-loader',
    'lib32-vulkan-icd-loader',
    'ffmpeg libva-utils libva-vdpau-driver vdpauinfo' // Improving hardware video accelaration
  ]

  const cpuVendor = getCpuVendor()
  let videoDriversEnvironmentVariables
  switch (cpuVendor) {
  case 'AuthenticAMD':
    GPUDriversList.push(
      'xf86-video-amdgpu',
      'vulkan-radeon',
      'lib32-vulkan-radeon',
      'libva-mesa-driver',
      'lib32-libva-mesa-driver',
      'mesa-vdpau',
      'lib32-mesa-vdpau'
    )
    videoDriversEnvironmentVariables = 'export LIBVA_DRIVER_NAME=radeonsi'
    break
  case 'GenuineIntel':
    GPUDriversList.push('vulkan-intel', 'lib32-vulkan-intel', 'intel-media-driver', 'libvdpau-va-gl')
    videoDriversEnvironmentVariables = 'export LIBVA_DRIVER_NAME=iHD\nexport VDPAU_DRIVER=va_gl'
    break

  default:
    console.error('@installGPUDrivers::Not found supported cpu vendor, skip...')
    break
  }

  await sh(`yay -S ${GPUDriversList.join(' ')} --noconfirm --needed`)

  if (videoDriversEnvironmentVariables) {
    await addInShrc(videoDriversEnvironmentVariables, { comment: '# video drivers environment variables' })
  }
})
