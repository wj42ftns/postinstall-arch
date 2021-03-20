exports.path = '$HOME/.config/autostart/onLogin.sh.desktop'
exports.body = `
[Desktop Entry]
Encoding=UTF-8
Type=Application
Name=onLogin.sh
Comment=
Exec=$HOME/.customScripts/onLogin.sh
RunHook=0
StartupNotify=false
Terminal=false
Hidden=false
`