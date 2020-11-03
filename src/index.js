const { execSync } = require('child_process')
const os = require('os')

// @TODO separate "main" and "casual" versions

// https://www.baeldung.com/linux/bash-interactive-prompts
// say yes in interactive script example: run('yes | apt remove baobab')
// answer to multiply answers in interactive script example: run('printf "bot\nn\nJava" | ./questions.sh')
const run = (command, options = {}) => execSync(command, { stdio: 'inherit', ...options })
const hasErr = command => {
  try {
    run(command, { stdio: 'ignore' })
  } catch (err) {
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
    'libreoffice-fresh', // gui office programs
    'thunderbird', // gui email client
    // ################################
    // #       System utilities       #
    // ################################
    'curl', // cli file downloader
    'wget', // cli file downloader
    'git', // cli downloading repositories
    'tmux', // terminal multiplexer
    'htop', // cli checking process manager
    'tree', // cli showing tree structure of directory
    'rsync', // cli synchronization files
    'gparted', // gui managing disk partitions
    'ristretto', // gui xcfe image viewer
    // #####################
    // #       Media       #
    // #####################
    'mplayer', // cli video/audio player
    'vlc', // gui video/audio player
    'gimp', // image redactor
    // ########################
    // #       Internet       #
    // ########################
    'firefox', // gui web browser
    
    // ###########################
    // #       Programming       #
    // ###########################
    'vscode',
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

  const tmpDir = os.tmpdir()
  run(`sudo pacman -S ${yayDependenciesList} --noconfirm --needed`)
  run(`rm -rf ${tmpDir}/yay`)
  run('git clone https://aur.archlinux.org/yay.git', { cwd: tmpDir })
  run('makepkg -si --noconfirm --needed', { cwd: `${tmpDir}/yay` })
  run(`rm -rf ${tmpDir}/yay`)
}

function installYayPrograms () {
  const yayProgramList = [
    // ########################
    // #       Internet       #
    // ########################
    'google-chrome', // gui web browser
    'skypeforlinux-stable-bin', // online calls
    'slack-desktop', // online calls
    'zoom',
    // '',
  ]
  run(`yay -S ${yayProgramList} --noconfirm --needed`)
}

function main () {
  fixGrubForRu()
  run('sudo pacman -Sy archlinux-keyring --noconfirm --needed') // before upgrading packages need to install it 
  run('sudo pacman -Syu --noconfirm') // update pacman packages and system
  installYay()
  run('yay -Syu --noconfirm --devel --timeupdate') // update yay packages and system
  installPacmanPrograms()
  installYayPrograms()
  
  // clean up all redundant dependencies
  run('sudo pacman -Yc')
  run('yay -Yc')
}

main()
