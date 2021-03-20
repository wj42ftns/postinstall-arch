exports.path = '$HOME/.customScripts/onLogin.sh'
exports.body = `
#!/bin/sh

# disable CapsLock and using instead of it Ctrl
setxkbmap -option "ctrl:nocaps" 
# adding switching keyboard layout US/RU via shift+alt
setxkbmap -option grp:alt_shift_toggle us,ru
`