exports.path = '$HOME/.config/autostart/skypeforlinux.desktop'
exports.body = `
[Desktop Entry]
Name=Skype for Linux
Comment=Skype Internet Telephony
Exec=/usr/bin/skypeforlinux && sleep 5 && wmctrl -r skype.Skype -x -b add,hidden
Icon=skypeforlinux
Terminal=false
Type=Application
StartupNotify=false
X-GNOME-Autostart-enabled=true
`