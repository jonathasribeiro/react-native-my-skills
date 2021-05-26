import React from 'react';
import {TouchableOpacity, Text, useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function SkillCard({skill}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundGrid = {
    backgroundColor: isDarkMode ? '#1f1e25' : '#999999',
  };

  const textColor = {
    color: isDarkMode ? Colors.light : Colors.dark,
  };

  return (
    <TouchableOpacity style={[backgroundGrid, styles.buttonSkill]}>
      <Text style={[textColor, styles.textSkill]}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
});
