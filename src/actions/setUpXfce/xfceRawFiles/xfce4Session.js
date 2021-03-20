exports.path = '$HOME/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-session.xml'
exports.body = `
<?xml version="1.0" encoding="UTF-8"?>

<channel name="xfce4-session" version="1.0">
  <property name="general" type="empty">
    <property name="FailsafeSessionName" type="empty"/>
    <property name="LockCommand" type="empty"/>
    <property name="SessionName" type="string" value="Default"/>
    <property name="SaveOnExit" type="bool" value="false"/>
  </property>
  <property name="sessions" type="empty">
    <property name="Failsafe" type="empty">
      <property name="IsFailsafe" type="empty"/>
      <property name="Count" type="empty"/>
      <property name="Client0_Command" type="empty"/>
      <property name="Client0_Priority" type="empty"/>
      <property name="Client0_PerScreen" type="empty"/>
      <property name="Client1_Command" type="empty"/>
      <property name="Client1_Priority" type="empty"/>
      <property name="Client1_PerScreen" type="empty"/>
      <property name="Client2_Command" type="empty"/>
      <property name="Client2_Priority" type="empty"/>
      <property name="Client2_PerScreen" type="empty"/>
      <property name="Client3_Command" type="empty"/>
      <property name="Client3_Priority" type="empty"/>
      <property name="Client3_PerScreen" type="empty"/>
      <property name="Client4_Command" type="empty"/>
      <property name="Client4_Priority" type="empty"/>
      <property name="Client4_PerScreen" type="empty"/>
    </property>
  </property>
  <property name="shutdown" type="empty">
    <property name="LockScreen" type="bool" value="false"/>
  </property>
</channel>`