const { isMain } = require('../../../helpers')

exports.path = '$HOME/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-notifyd.xml'
exports.getBody = () => `
<?xml version="1.0" encoding="UTF-8"?>

<channel name="xfce4-notifyd" version="1.0">
  <property name="applications" type="empty">
    <property name="known_applications" type="array">
      <value type="string" value="blueman"/>
      <value type="string" value="com.uploadedlobster.peek"/>
      <value type="string" value="google-chrome"/>
      <value type="string" value="nm-applet"/>
      <value type="string" value="notify-send"/>
      <value type="string" value="Slack"/>
      <value type="string" value="thunar"/>
      <value type="string" value="thunar-volman"/>
      <value type="string" value="Thunderbird"/>
      <value type="string" value="Transmission"/>
      <value type="string" value="vlc"/>
      <value type="string" value="Xfce volume control"/>
      <value type="string" value="Xfce4-notifyd settings"/>
      <value type="string" value="xfce4-power-manager"/>
      <value type="string" value="xfce4-settings-helper"/>
    </property>
    <property name="muted_applications" type="array">
      <value type="string" value="Xfce volume control"/>
      <value type="string" value="xfce4-settings-helper"/>
      <value type="string" value="thunar"/>
      <value type="string" value="nm-applet"/>
      <value type="string" value="google-chrome"/>
      <value type="string" value="Thunderbird"/>
      <value type="string" value="Xfce4-notifyd settings"/>
    </property>
  </property>
  <property name="primary-monitor" type="uint" value="0"/>
  <property name="notify-location" type="uint" value="2"/>
  <property name="log-level" type="uint" value="0"/>
  <property name="log-level-apps" type="uint" value="0"/>
  <property name="do-not-disturb" type="bool" value="false"/>
  <property name="initial-opacity" type="double" value="1.000000"/>
  <property name="do-slideout" type="bool" value="false"/>
  <property name="do-fadeout" type="bool" value="false"/>
  <property name="expire-timeout" type="int" value="${isMain ? '2' : '30'}"/>
</channel>`