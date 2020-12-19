const { writeFileSync } = require('fs')
const { sh } = require('../helpers')

const base64Data =
  ',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'

module.exports = async function installFlatpakPrograms () {
  await sh(`
echo "Adding Flathub repository (Flatpak)"
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
echo "Installing Firefox Flatpak"
flatpak --assumeyes install flathub org.mozilla.firefox
echo "Configuring Firefox Flatpak to run under wayland and other optimizations"
sudo flatpak override --socket=wayland --env="MOZ_ENABLE_WAYLAND=1 GTK_USE_PORTAL=1" org.mozilla.firefox    # Configuring Firefox Flatpak to run under wayland and other optimizations

echo "Improving font rendering issues with Firefox Flatpak"
sudo pacman -S --noconfirm gnome-settings-daemon
mkdir -p ~/.var/app/org.mozilla.firefox/config/fontconfig	
touch ~/.var/app/org.mozilla.firefox/config/fontconfig/fonts.conf	
tee -a ~/.var/app/org.mozilla.firefox/config/fontconfig/fonts.conf << EOF	
<?xml version='1.0'?>	
<!DOCTYPE fontconfig SYSTEM 'fonts.dtd'>	
<fontconfig>	
    <!-- Disable bitmap fonts. -->	
    <selectfont><rejectfont><pattern>	
        <patelt name="scalable"><bool>false</bool></patelt>	
    </pattern></rejectfont></selectfont>	
</fontconfig>	
EOF

echo "Configuring Firefox Flatpak to run under wayland and other optimizations"
sudo flatpak override --socket=wayland --env="MOZ_ENABLE_WAYLAND=1 GTK_USE_PORTAL=1" org.mozilla.firefox
`)

writeFileSync('/tmp/firefox.png', base64Data, 'base64')

await sh(`
sudo cp /tmp/firefox.png /usr/share/icons/firefox.png
rm /tmp/firefox.png
mkdir -p ~/.local/share/applications
touch ~/.local/share/applications/firefox.desktop
tee -a ~/.local/share/applications/firefox.desktop << EOF	
[Desktop Entry]
Version=1.0
Name=firefox
Comment=firefox
Exec=flatpak run org.mozilla.firefox
Icon=/usr/share/icons/firefox.png
Terminal=false
Type=Application
Categories=Network
EOF
`)
}