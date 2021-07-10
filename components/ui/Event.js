import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GenericEvents from "./../../data/events/GenericEvents.js";


const EventScreen = ({ route, navigation}) => {
  const [eventID, setEventID] = useState(route.params.eventID);

  const eventData = GenericEvents["" + eventID];
  return (
    <View style={styles.container}>
      <Text  style={{borderRadius: 5, width: '75%', height: 170, backgroundColor: 'green', padding: 2}} title="Event Description"> 
          {eventData.text}
      </Text>
      <br></br>
      {eventData.decisions.map((decision) => {
        return (
        <TouchableOpacity  style={{borderRadius: 5, width: '50%', height: 70, backgroundColor: 'dodgerblue', padding: 2, marginTop: 20}} title="New Game" onPress={() => setEventID("donut02")}> 
          <Text>{decision.text}</Text>
      </TouchableOpacity>);
      })}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default EventScreen;