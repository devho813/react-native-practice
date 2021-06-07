import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <Text style={styles.mainText}>hello world</Text>
      </View>
      <View style={styles.subView}>
        <Text>hello world</Text>
      </View>
      <View style={styles.anotherSubView}>
        <Text style={styles.mainText}>hello world</Text>
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
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '50%',
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    padding: 20,
  },
});
