import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';

const Notifications = () => {
  const [generalNotification, setGeneralNotification] = useState(false);
  const [soundNotification, setSoundNotification] = useState(false);
  const [vibrateNotification, setVibrateNotification] = useState(false);
  const [appupdatesNotification, setAppupdatesNotification] = useState(false);
  const [newserviceNotification, setNewserviceNotification] = useState(false);
  const [newtipsNotification, setNewtipsNotification] = useState(false);



  const toggleGeneralNotification = () => {
    setGeneralNotification(!generalNotification);
  };

  const toggleSoundNotification = () => {
    setSoundNotification(!soundNotification);
  };

  const toggleVibrateNotification = () => {
    setVibrateNotification(!vibrateNotification);
  };

  const toggleAppupdatesNotification = () => {
    setAppupdatesNotification(!appupdatesNotification);
  };

  const toggleNewserviceNotification = () => {
    setNewserviceNotification(!newserviceNotification);
  };

  const toggleNewtipsNotification = () => {
   setNewtipsNotification(!newtipsNotification);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>General Notifications</Text>
        <Switch
          value={generalNotification}
          onValueChange={toggleGeneralNotification}
        />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Sound</Text>
        <Switch
          value={soundNotification}
          onValueChange={toggleSoundNotification}
        />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Vibrate</Text>
        <Switch
          value={vibrateNotification}
          onValueChange={toggleVibrateNotification}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>App updates</Text>
        <Switch
          value={appupdatesNotification}
          onValueChange={toggleAppupdatesNotification}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>New service available</Text>
        <Switch
          value={newserviceNotification}
          onValueChange={toggleNewserviceNotification}
        />
      </View>


      <View style={styles.settingRow}>
        <Text style={styles.settingText}>New tips available</Text>
        <Switch
          value={newtipsNotification}
          onValueChange={toggleNewtipsNotification}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#121212'
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    fontSize: 17,
    color:'white'
  },
});

export default Notifications;
