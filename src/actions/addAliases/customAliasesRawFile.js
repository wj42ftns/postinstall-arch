const { isMain } = require('../../helpers')

exports.path = '$HOME/.customScripts/customAliases.sh'
exports.getBody = () => {
  let body = `
alias ls='ls --color=auto --classify'
alias off='systemctl poweroff -i'
alias reb='systemctl reboot -i'
alias zzz='systemctl suspend'
`
  if (isMain) {
    body += `
alias defaultVpn='sudo openvpn --config $HOME/.vpn/amsterdam-main.ovpn'
alias vismeVpn="node $HOME/.customScripts/vismeVpn.js"
alias resetIdeaSettings='sudo rm -f $HOME/.config/JetBrains/IntelliJIdea*/options/other.xml ; rm -rf $HOME/.config/JetBrains/IntelliJIdea*/eval/*' ; rm -rf $HOME/.java/.userPrefs`
  }
  body += `
alias cleanUpSystem='sudo rm -rf $HOME/.cache/* ; sudo rm -rf $HOME/.cache ; sudo rm -rf $HOME/tmp/* ; sudo rm -rf $HOME/.local/share/Trash/* ; sudo rm -rf /var/cache/* ; sudo rm -rf /var/tmp/* ; sudo pacman -Sc --noconfirm ; yay -Sc --noconfirm ; yay -Yc --noconfirm'
alias updateSystem='sudo rm -f /var/lib/pacman/db.lck && sudo pacman -Syu --noconfirm && yay -Syu --noconfirm && cleanUpSystem`
  if (isMain) {
    body += ' && resetIdeaSettings'
  }

  return body
}