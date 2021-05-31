alias off='systemctl poweroff -i'
alias reb='systemctl reboot -i'
alias zzz='systemctl suspend'

alias defaultVpn='sudo openvpn --config $HOME/.vpn/default.ovpn'
alias vismeVpn="node $HOME/.customScripts/runVismeVpn.js"
alias resetIdeaSettings='sudo rm -f $HOME/.config/JetBrains/IntelliJIdea*/options/other.xml ; rm -rf $HOME/.config/JetBrains/IntelliJIdea*/eval/* ; rm -rf $HOME/.java/.userPrefs'
alias cleanUpSystem='sudo rm -rf $HOME/.cache/* ; sudo rm -rf $HOME/.cache ; sudo rm -rf $HOME/tmp/* ; sudo rm -rf $HOME/.local/share/Trash/* ; sudo rm -rf /var/cache/* ; sudo rm -rf /var/tmp/* ; sudo pacman -Sc --noconfirm ; yay -Sc --noconfirm ; yay -Yc --noconfirm'
alias updateSystem='sudo rm -f /var/lib/pacman/db.lck && sudo pacman -Syu --noconfirm && yay -Syu --noconfirm && cleanUpSystem && resetIdeaSettings'
