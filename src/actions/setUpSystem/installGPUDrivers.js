const { sh, addInShrc, positiveInfo } = require('../../helpers')

const getCpuVendor = async function getCpuVendor () {
  return (await sh('cat /proc/cpuinfo | grep vendor | uniq')).stdout.toString().replace(/^.*: /, '')
}

const isNVidiaSupported = async function isNVidiaSupported () {
  return (await sh(`modinfo nvidia`)).stderr?.[0] !== 'modinfo: ERROR: Module rest not found.'
}
const isLtsLinuxKernel = async function isLtsLinuxKernel () {
  return (await sh(`uname -r`)).stdout?.[0]?.endsWith?.('-lts')
}

module.exports = async function installGPUDrivers () {
  const GPUDriversList = [
    // common gpu drivers
    'mesa',
    'lib32-mesa',
    'vulkan-icd-loader',
    'lib32-vulkan-icd-loader',
    // Improving hardware video accelaration
    'ffmpeg',
    'libva-utils',
    'libva-vdpau-driver',
    'vdpauinfo'
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


  for (const programmName of GPUDriversList) {
    await sh(`yay -S ${programmName} --noconfirm --needed`)
    positiveInfo(`${programmName} installed.`)
  }

  if (videoDriversEnvironmentVariables) {
    await addInShrc(videoDriversEnvironmentVariables, { comment: '# video drivers environment variables' })
  }

  if (await isNVidiaSupported()) {
    const driverName = (await isLtsLinuxKernel()) ? 'nvidia-lts' : 'nvidia'
    await sh(`sudo pacman -S ${driverName} --noconfirm --needed`)
    positiveInfo(`${driverName} installed.`)
  }
}
