const { sh } = require('../../helpers')
const { ALACRITY, setUpAlacritty } = require('./alacritty')
const { DOCKER, setUpDocker } = require('./docker')

module.exports = async function installPacmanPrograms () {
  const pacmanProgramList = [
    // ##############################
    // #       i3 environment       #
    // ##############################
    'dmenu', // i3 integrated program runner
    // #####################
    // #       Fonts       #
    // #####################
    'ttf-roboto',
    'ttf-roboto',
    'ttf-roboto-mono',
    'ttf-droid',
    'ttf-opensans',
    'ttf-dejavu',
    'ttf-liberation',
    'ttf-hack',
    'noto-fonts',
    'ttf-fira-code',
    'ttf-fira-mono',
    'ttf-font-awesome',
    'noto-fonts-emoji',
    'ttf-hanazono',
    'adobe-source-code-pro-fonts',
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
    'pass', // cli password manager
    'openssh', // ssh utils
    'curl', // cli file downloader
    'wget', // cli file downloader
    'git', // cli downloading repositories
    'tmux', // terminal multiplexer
    'htop', // cli checking process manager
    'tree', // cli showing tree structure of directory
    'rsync', // cli synchronization files
    'gparted', // gui managing disk partitions
    'ristretto', // gui xcfe image viewer
    'transmission-cli', // cli torrent client
    'transmission-gtk', // gui torrent client
    ALACRITY, // terminal emulator
    // #####################
    // #       Media       #
    // #####################
    'mplayer', // cli video/audio player
    'vlc', // gui video/audio player
    'gimp', // image editor
    // ########################
    // #       Internet       #
    // ########################
    'firefox', // gui web browser
    'thunderbird', // gui email client
    'mutt', // cli email client
    // ###########################
    // #       Programming       #
    // ###########################
    DOCKER,
    'docker-compose',
    'vscode'
    // '',
    // '',
  ].join(' ')
  await sh(`sudo pacman -S ${pacmanProgramList} --noconfirm --needed`)
  
  await setUpAlacritty()
  await setUpDocker()
}
