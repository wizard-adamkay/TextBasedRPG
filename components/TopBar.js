import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity  style={{borderRadius: 5, width: '100%', height: 70, backgroundColor: 'dodgerblue', padding: 2}} title={user.title} onPress={() =>  {Platform.OS === "android" ? ToastAndroid.showWithGravity("" + user.id, ToastAndroid.SHORT, ToastAndroid.CENTER) : console.log(user.id); setData(user)}}> 
              <Text>New Game</Text>
          </TouchableOpacity>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;