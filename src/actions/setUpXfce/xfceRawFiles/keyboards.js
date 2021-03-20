exports.path = '$HOME/.config/xfce4/xfconf/xfce-perchannel-xml/keyboards.xml'
exports.body = `
<?xml version="1.0" encoding="UTF-8"?>

<channel name="keyboards" version="1.0">
  <property name="Default" type="empty">
    <property name="RestoreNumlock" type="bool" value="true"/>
    <property name="Numlock" type="bool" value="true"/>
    <property name="KeyRepeat" type="bool" value="true">
      <property name="Delay" type="int" value="350"/>
      <property name="Rate" type="int" value="35"/>
    </property>
  </property>
</channel>`