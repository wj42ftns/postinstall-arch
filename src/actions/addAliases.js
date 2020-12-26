const { sh, hasErr, addInShrc } = require('../helpers')

const createCustomBashAliasesFile = async () => {
  if (await hasErr('sudo stat $HOME/.bashCustomAliases')) {
    return
  }

  await sh(`
touch $HOME/.bashCustomAliases
tee -a $HOME/.bashCustomAliases << EOF
alias ls='ls --color=auto --classify'
alias zip='zip -9'
alias gzip='gzip -9'
alias bzip2='bzip2 -9'
alias mkdir='mkdir -p'
alias off='systemctl poweroff -i'
alias reb='systemctl reboot -i'
alias down='sudo shutdown -h'
alias up='shutdown -c'
alias zzz='systemctl suspend'
alias firefox='flatpak run org.mozilla.firefox'
alias updateSystem='sudo rm -f /var/lib/pacman/db.lck && sudo pacman -Syu && yay -Syu --aur && flatpak update && rm -rf $HOME/.cache && rm -rf $HOME/.local/share/Trash/*'
EOF
`)
}

module.exports = async function addAliases () {
  await createCustomBashAliasesFile()
  await addInShrc('source $HOME/.bashCustomAliases', { comment: '# customAliases' })
}
