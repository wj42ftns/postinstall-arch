exports.path = '$HOME/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-panel.xml'
exports.body = `
<?xml version="1.0" encoding="UTF-8"?>

<channel name="xfce4-panel" version="1.0">
  <property name="configver" type="int" value="2"/>
  <property name="panels" type="array">
    <value type="int" value="1"/>
    <property name="dark-mode" type="bool" value="false"/>
    <property name="panel-1" type="empty">
      <property name="position" type="string" value="p=6;x=0;y=0"/>
      <property name="length" type="uint" value="100"/>
      <property name="position-locked" type="bool" value="true"/>
      <property name="icon-size" type="uint" value="16"/>
      <property name="size" type="uint" value="26"/>
      <property name="plugin-ids" type="array">
        <value type="int" value="1"/>
        <value type="int" value="2"/>
        <value type="int" value="3"/>
        <value type="int" value="6"/>
        <value type="int" value="8"/>
        <value type="int" value="9"/>
        <value type="int" value="10"/>
        <value type="int" value="7"/>
        <value type="int" value="11"/>
        <value type="int" value="12"/>
      </property>
      <property name="disable-struts" type="bool" value="false"/>
    </property>
  </property>
  <property name="plugins" type="empty">
    <property name="plugin-1" type="string" value="applicationsmenu">
      <property name="show-button-title" type="bool" value="false"/>
      <property name="show-menu-icons" type="bool" value="true"/>
      <property name="show-generic-names" type="bool" value="false"/>
      <property name="custom-menu" type="bool" value="false"/>
    </property>
    <property name="plugin-2" type="string" value="tasklist">
      <property name="grouping" type="uint" value="0"/>
      <property name="middle-click" type="uint" value="1"/>
      <property name="show-labels" type="bool" value="true"/>
      <property name="flat-buttons" type="bool" value="false"/>
      <property name="show-handle" type="bool" value="true"/>
    </property>
    <property name="plugin-3" type="string" value="separator">
      <property name="expand" type="bool" value="true"/>
      <property name="style" type="uint" value="0"/>
    </property>
    <property name="plugin-6" type="string" value="systray">
      <property name="square-icons" type="bool" value="true"/>
      <property name="known-legacy-items" type="array">
        <value type="string" value="xfce4-power-manager"/>
        <value type="string" value="anydesk"/>
        <value type="string" value="task manager"/>
        <value type="string" value="thunar"/>
        <value type="string" value="networkmanager applet"/>
      </property>
      <property name="known-items" type="array">
        <value type="string" value="redshift"/>
        <value type="string" value="Screenkey"/>
        <value type="string" value="chrome_status_icon_1"/>
        <value type="string" value="Skype1"/>
        <value type="string" value="birdtray"/>
        <value type="string" value="zoom"/>
        <value type="string" value="mytetra"/>
        <value type="string" value="vlc"/>
        <value type="string" value="obs"/>
        <value type="string" value="flameshot"/>
        <value type="string" value="Slack1"/>
        <value type="string" value="blueman"/>
      </property>
    </property>
    <property name="plugin-8" type="string" value="pulseaudio">
      <property name="enable-keyboard-shortcuts" type="bool" value="true"/>
      <property name="show-notifications" type="bool" value="true"/>
    </property>
    <property name="plugin-9" type="string" value="power-manager-plugin"/>
    <property name="plugin-10" type="string" value="notification-plugin"/>
    <property name="plugin-11" type="string" value="separator">
      <property name="style" type="uint" value="0"/>
    </property>
    <property name="plugin-12" type="string" value="clock">
      <property name="digital-format" type="string" value="%Y.%m.%d %T"/>
      <property name="mode" type="uint" value="2"/>
    </property>
    <property name="plugin-7" type="string" value="xkb">
      <property name="display-name" type="uint" value="0"/>
      <property name="display-type" type="uint" value="2"/>
      <property name="caps-lock-indicator" type="bool" value="true"/>
      <property name="display-tooltip-icon" type="bool" value="true"/>
      <property name="group-policy" type="uint" value="0"/>
    </property>
  </property>
</channel>`