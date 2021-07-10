import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from "./components/ui/MainMenu";
import Event from "./components/ui/Event";

const Stack = createStackNavigator();


export default function App() { 
  return (
    <NavigationContainer initialRouteName="MainMenu" >
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Event" component={Event} />
      </Stack.Navigator>
    </NavigationContainer>
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
