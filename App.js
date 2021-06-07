import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.mainView}>
      <View>
        <Text>hello world</Text>
      </View>
      <View>
        <Text>hello world</Text>
      </View>
      <View>
        <Text>hello world</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
