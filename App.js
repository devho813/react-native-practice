import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Generator from './src/generator';
import Header from './src/header';

function App() {
  const [appName] = useState('My First App');
  const [random] = useState([36, 999]);

  const onAddRandomNum = useCallback(() => {
    alert('add random number!!');
  }, []);

  return (
    <View style={styles.mainView}>
      <Header name={appName} />

      <View>
        <Text
          style={styles.mainText}
          onPress={() => {
            alert('text touch event');
          }}>
          Hello World
        </Text>
      </View>

      <Generator onAddRandomNum={onAddRandomNum} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
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
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});
