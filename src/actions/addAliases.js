const { sh, hasNotErr, addInShrc, isMain, progress } = require('../helpers')

const createCustomBashAliasesFile = progress(async function createCustomBashAliasesFile () {
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
alias zzz='systemctl suspend'${isMain ? `
alias resetIdeaSettings='sudo rm -f $HOME/.config/JetBrains/IntelliJIdea*/options/other.xml ; rm -rf $HOME/.config/JetBrains/IntelliJIdea*/eval/*' ; rm -rf $HOME/.java/.userPrefs` : ''}
alias cleanUpSystem='sudo rm -rf $HOME/.cache ; sudo rm -rf $HOME/.local/share/Trash/* ; sudo rm -rf /var/cache/* ; sudo rm -rf /var/tmp/* ; sudo pacman -Sc --noconfirm ; yay -Sc --noconfirm ; yay -Yc --noconfirm'
alias updateSystem='sudo rm -f /var/lib/pacman/db.lck && sudo pacman -Syu --noconfirm && yay -Syu --aur  --noconfirm && cleanUpSystem${isMain ? ' && resetIdeaSettings' : ''}'
alias defaultVpn='sudo openvpn --config ~/.vpn/amsterdam-main.ovpn'
alias vismeVpn="node ~/.customScripts/vismeVpn.js"
EOF
`)
})

module.exports = progress(async function addAliases () {
  await createCustomBashAliasesFile()
  await addInShrc('source $HOME/customAliases.sh')
})
