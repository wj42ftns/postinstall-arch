exports.path = '$HOME/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-screensaver.xml'
exports.body = `
<?xml version="1.0" encoding="UTF-8"?>

<channel name="xfce4-screensaver" version="1.0">
  <property name="saver" type="empty">
    <property name="mode" type="int" value="0"/>
    <property name="idle-activation" type="empty">
      <property name="enabled" type="bool" value="false"/>
    </property>
    <property name="enabled" type="bool" value="false"/>
  </property>
  <property name="lock" type="empty">
    <property name="enabled" type="bool" value="false"/>
  </property>
</channel>`