import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

function Generator({onAddRandomNum}) {
  return (
    <View style={styles.generator}>
      <Button title={'Add Number'} onPress={onAddRandomNum} />
    </View>
  );
}

export default Generator;

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
