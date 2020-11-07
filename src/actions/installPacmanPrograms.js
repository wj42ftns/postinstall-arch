const { sh } = require('../helpers')

module.exports = async function installPacmanPrograms () {
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
    'vscode'
    // '',
    // '',
  ].join(' ')
  await sh(`sudo pacman -S ${pacmanProgramList} --noconfirm --needed`)
}
