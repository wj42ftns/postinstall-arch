const { sh, createFile } = require('../helpers')

const zshrcPath = '$HOME/.zshrc'
const zshrcBody = `
#!/usr/bin/zsh

[[ -z \\$DISPLAY && \\$XDG_VTNR -eq 1 ]] && exec startx &> /dev/null

export PATH=\\$HOME/.bin:\\$HOME/.config/rofi/scripts:\\$HOME/.local/bin:/usr/local/bin:\\$PATH

export HISTFILE=~/.zhistory
export HISTSIZE=3000
export SAVEHIST=3000

autoload -Uz compinit
for dump in ~/.zcompdump(N.mh+24); do
  compinit
done
compinit -C

# ohmyzsh
export ZSH="/usr/share/oh-my-zsh"
ZSH_THEME="af-magic"
DISABLE_AUTO_UPDATE="true"
plugins=()
ZSH_CACHE_DIR=\\$HOME/.cache/oh-my-zsh
[[ ! -d \\$ZSH_CACHE_DIR ]] && mkdir -p \\$ZSH_CACHE_DIR
source \\$ZSH/oh-my-zsh.sh
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
# ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=white"

# fzf & fd
[[ -e "/usr/share/fzf/fzf-extras.zsh" ]] && source /usr/share/fzf/fzf-extras.zsh
export FZF_DEFAULT_COMMAND="fd --type file --color=always --follow --hidden --exclude .git"
export FZF_CTRL_T_COMMAND="\\$FZF_DEFAULT_COMMAND"
# export FZF_DEFAULT_OPTS="--ansi"
export FZF_DEFAULT_OPTS="--height 50% --layout=reverse --border --preview 'file {}' --preview-window down:1"
export FZF_COMPLETION_TRIGGER="~~"

export TERM="rxvt-256color"
export EDITOR="\\$([[ -n \\$DISPLAY && \\$(command -v subl) ]] && echo 'subl' || echo 'vim')"
export BROWSER="chromium"
export SSH_KEY_PATH="~/.ssh/dsa_id"
export XDG_CONFIG_HOME="\\$HOME/.config"
export _JAVA_AWT_WM_NONREPARENTING=1

export MANPAGER="sh -c 'sed -e s/.\\\\\\\\\\\\\\\\x08//g | bat -l man -p'"

[[ -f ~/.env ]] && . ~/.env
[[ -f ~/.alias_zsh ]] && . ~/.alias_zsh`

module.exports = async function installZsh () {
  await sh(`
yay -S zsh --noconfirm --needed
yay -S zsh-completions --noconfirm --needed
yay -S oh-my-zsh-git --noconfirm --needed
yay -S zsh-syntax-highlighting --noconfirm --needed
yay -S zsh-autosuggestions --noconfirm --needed
`)
  await createFile(zshrcPath, zshrcBody)
}
