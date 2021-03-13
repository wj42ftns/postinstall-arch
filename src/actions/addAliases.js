const { sh, hasNotErr, addInShrc } = require('../helpers')

const createCustomBashAliasesFile = async () => {
  if (await hasNotErr('sudo stat $HOME/.bashCustomAliases')) {
    return
  }

  await sh(`
mkdir $HOME/.customScripts
touch $HOME/.customScripts/customAliases.sh
tee -a $HOME/.bashCustomAliases << EOF
alias ls='ls --color=auto --classify'
alias off='systemctl poweroff -i'
alias reb='systemctl reboot -i'
alias zzz='systemctl suspend'
alias cleanUpSystem='sudo rm -rf $HOME/.cache ; sudo rm -rf $HOME/.local/share/Trash/* ; sudo pacman -Sc --noconfirm ; yay -Sc --noconfirm ; yay -Yc --noconfirm'
alias updateSystem='sudo rm -f /var/lib/pacman/db.lck && sudo pacman -Syu --noconfirm && yay -Syu --aur  --noconfirm && flatpak update -y && cleanUpSystem'
alias defaultVpn='sudo openvpn --config ~/.vpn/amsterdam-main.ovpn'
alias vismeVpn="node ~/.customScripts/vismeVpn.js"
EOF
`)
}

module.exports = async function addAliases () {
  await createCustomBashAliasesFile()
  await addInShrc('source $HOME/customAliases.sh')
}
