exports.path = '$HOME/.config/xfce4/xfconf/xfce-perchannel-xml/keyboard-layout.xml'
exports.body = `
<?xml version="1.0" encoding="UTF-8"?>

<channel name="keyboard-layout" version="1.0">
  <property name="Default" type="empty">
    <property name="XkbLayout" type="string" value="us,ru"/>
    <property name="XkbVariant" type="string" value=","/>
    <property name="XkbOptions" type="empty">
      <property name="Group" type="string" value="grp:alt_shift_toggle"/>
      <property name="Compose" type="string" value="compose:ralt"/>
    </property>
    <property name="XkbModel" type="string" value="pc105"/>
  </property>
</channel>`