import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function MainMenu({ navigation }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity  style={{borderRadius: 5, width: '50%', height: 70, backgroundColor: 'dodgerblue', padding: 2}} title="New Game" onPress={() => navigation.navigate('Event', {eventID: "donut01"})}> 
            <Text>New Game</Text>
        </TouchableOpacity>
        <br></br>
        <TouchableOpacity  style={{borderRadius: 5, width: '50%', height: 70, backgroundColor: 'dodgerblue', padding: 2}} title="New Game"> 
            <Text>Load Game</Text>
        </TouchableOpacity>
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
  