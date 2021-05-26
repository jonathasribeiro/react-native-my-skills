import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export function Button({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttontText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttontText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
