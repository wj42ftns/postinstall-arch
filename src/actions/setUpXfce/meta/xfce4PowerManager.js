// xfce4-power-manager-settings

exports.path = '$HOME/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-power-manager.xml'
exports.body = `
<?xml version="1.0" encoding="UTF-8"?>

<channel name="xfce4-power-manager" version="1.0">
  <property name="xfce4-power-manager" type="empty">
    <property name="brightness-switch-restore-on-exit" type="int" value="0"/>
    <property name="brightness-switch" type="int" value="0"/>
    <property name="show-tray-icon" type="bool" value="false"/>
    <property name="brightness-step-count" type="uint" value="12"/>
    <property name="lid-action-on-ac" type="uint" value="0"/>
    <property name="logind-handle-lid-switch" type="bool" value="false"/>
    <property name="inactivity-sleep-mode-on-battery" type="uint" value="1"/>
    <property name="lid-action-on-battery" type="uint" value="0"/>
    <property name="critical-power-action" type="uint" value="3"/>
    <property name="lock-screen-suspend-hibernate" type="bool" value="false"/>
    <property name="brightness-on-battery" type="uint" value="9"/>
    <property name="dpms-on-battery-sleep" type="uint" value="0"/>
    <property name="blank-on-battery" type="int" value="0"/>
    <property name="dpms-on-battery-off" type="uint" value="0"/>
    <property name="brightness-level-on-battery" type="uint" value="100"/>
    <property name="blank-on-ac" type="int" value="0"/>
    <property name="dpms-on-ac-sleep" type="uint" value="0"/>
    <property name="dpms-on-ac-off" type="uint" value="0"/>
    <property name="brightness-level-on-ac" type="uint" value="100"/>
    <property name="dpms-enabled" type="bool" value="false"/>
    <property name="presentation-mode" type="bool" value="false"/>
    <property name="general-notification" type="bool" value="true"/>
    <property name="critical-power-level" type="uint" value="15"/>
  </property>
</channel>`