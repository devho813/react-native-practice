import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Header({name}) {
  const onPressOutHeader = useCallback(() => {
    alert('hello world');
  }, []);

  return (
    <TouchableOpacity style={styles.header} onPressOut={onPressOutHeader}>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
