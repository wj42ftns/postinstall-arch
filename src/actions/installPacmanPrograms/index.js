const { sh, isMain, isCasual } = require('../../helpers')
const { ALACRITY, setUpAlacritty } = require('./alacritty')
const { DOCKER, setUpDocker } = require('./docker')

module.exports = async function installPacmanPrograms () {
  const pacmanProgramList = [
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
    'xarchiver p7zip zip unzip unrar', // working with archives 
    isMain && 'ranger', // cli  vim-like file manager
    'thunar', // gui file manager
    isMain && 'bc', // cli calculator
    isCasual && 'speedcrunch', // gui calculator
    'bleachbit', // gui system cleaner
    'gparted', // gui managing disk partitions
    'libreoffice-fresh', // gui office programs
    isMain && 'pass', // cli password manager
    'keepass', // gui password manager
    'openssh', // ssh utils
    'openvpn', // cli using vpn
    'curl', // cli file downloader
    'wget', // cli file downloader
    'git', // cli downloading repositories
    isMain && 'tmux', // terminal multiplexer
    'htop', // cli checking process manager
    'tree', // cli showing tree structure of directory
    'rsync', // cli synchronization files
    'ristretto', // gui xcfe image viewer
    isMain && 'transmission-cli', // cli torrent client
    'transmission-gtk', // gui torrent client
    ALACRITY, // terminal emulator
    'flameshot', // screenshots
    'peek', // make gifs and light weight videos without sound screen recording
    'obs-studio', // make hight quality video screen recording
    'screenkey', // for screen recorders showing mouse and keyboard pressing
    // #####################
    // #       Media       #
    // #####################
    'mplayer', // cli video/audio player
    'vlc', // gui video/audio player
    'gimp', // gui image editor
    'pinta', // gui simple image editor
    // ########################
    // #       Internet       #
    // ########################
    'firefox', // main gui web browser
    isMain && 'telegram-desktop',
    isMain && 'thunderbird', // gui email client
    isMain && 'mutt', // cli email client
    isMain && 'elinks', // cli browser client
    // ###########################
    // #       Programming       #
    // ###########################
    isMain && DOCKER,
    isMain && 'docker-compose',
    // '',
    // '',
  ].filter(Boolean).join(' ')
  await sh(`sudo pacman -S ${pacmanProgramList} --noconfirm --needed`)
  
  await setUpAlacritty()
  await setUpDocker()
}
