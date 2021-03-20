exports.path = '$HOME/.config/autostart/redshift-gtk.desktop'
exports.body = `
[Desktop Entry]
Version=1.0
Name=Redshift
Comment=Color temperature adjustment tool
Exec=redshift-gtk
Icon=redshift
Terminal=false
Type=Application
Categories=Utility;
StartupNotify=true
Hidden=false
X-GNOME-Autostart-enabled=true
`