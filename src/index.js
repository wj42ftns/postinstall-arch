const { execSync } = require('child_process')

// https://www.baeldung.com/linux/bash-interactive-prompts
// say yes in interactive script example: run('yes | apt remove baobab')
// answer to multiply answers in interactive script example: run('printf "bot\nn\nJava" | ./questions.sh')
const run = (command, options = {}) => execSync(command, { stdio: 'inherit', ...options })
const hasErr = command => {
  try {
    console.log(`|42| command ->    `, command)
    execSync(command)
  } catch (err) {
    console.log(`|42| err ->    `, err)
    return true
  }

  return false
}
const hasNotErr = command => !hasErr(command)

function fixGrubForRu () {
  if (hasNotErr('sudo stat /boot/grub/locale/ru.gmo')) {
    return
  }
  // from YouTube found this for fixing something in grub: " Ещё добавьте по исправлению загрузчика Grub -https://archlinux.org.ru/forum/topic/19444/?page=2 "
  run('mkdir -p /boot/grub/locale')
  run('sudo cp /usr/share/locale/ru/LC_MESSAGES/grub.mo /boot/grub/locale/ru.gmo')
}

function installPacmanPrograms () {
  const pacmanProgramList = [
    // ##############################
    // #       i3 environment       #
    // ##############################
    'dmenu', // i3 integrated program runner
    // ######################
    // #       System       #
    // ######################
    'ranger', // cli  vim-like file manager
    'thunar', // gui file manager
    'bc', // cli calculator
    'speedcrunch', // gui calculator
    'bleachbit', // gui system cleaner
    'gparted', // gui working with hardware disk
    // ################################
    // #       System utilities       #
    // ################################
    'curl', // cli file downloader
    'wget', // cli file downloader
    'git', // cli downloading repositories
    'tmux', // terminal multiplexer
    'htop', // cli checking process manager
    'tree', // cli showing tree structure of directory
    // #####################
    // #       Media       #
    // #####################
    'mplayer', // cli video/audio player
    'vlc', // gui video/audio player
    // ########################
    // #       Internet       #
    // ########################
    'firefox' // gui web browser
    // '',
    // '',
    // '',
  ].join(' ')
  run(`sudo pacman -S ${pacmanProgramList} --noconfirm --needed`)
}

function installYay () {
  if (hasNotErr('yay --version')) {
    // already installed
    return
  }

  const yayDependenciesList = [
    'base-devel', // system development tools
    'git', // cli downloading repositories
    'wget', // cli file downloader
    'yajl' // cli json parser
  ].join(' ')
  run(`sudo pacman -S ${yayDependenciesList} --noconfirm --needed`)
  run('rm -rf /tmp/yay')
  run('git clone https://aur.archlinux.org/yay.git', { cwd: '/tmp' })
  run('makepkg -si --noconfirm --needed', { cwd: '/tmp/yay' })
  run('rm -rf /tmp/yay')
}

function installYayPrograms () {
  const yayProgramList = [
    // ########################
    // #       Internet       #
    // ########################
    'skypeforlinux-stable-bin'
    // '',
    // '',
    // '',
  ]
  run(`yay -S ${yayProgramList} --noconfirm --needed`)
}

function main () {
  run('sudo pacman -Syu --noconfirm') // update packages and system
  installYay()
  fixGrubForRu()
  installPacmanPrograms()
  installYayPrograms()
}

main()
