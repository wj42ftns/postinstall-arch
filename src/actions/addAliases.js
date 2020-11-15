const { sh, addInShrc } = require('../helpers')

const createCustomBashAliasesFile = async () => {
  await sh(`
touch ~/.bashCustomAliases
tee -a ~/.bashCustomAliases << EOF	
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
alias updateSystem="sudo rm -f /var/lib/pacman/db.lck && sudo pacman -Syu && yay -Syu --aur && flatpak update && rm -rf ~/.cache
EOF
`)
}

module.exports = async function addAliases () {
  await createCustomBashAliasesFile()
  await addInShrc('source ~/.bashCustomAliases', { comment: '# customAliases' })
}
