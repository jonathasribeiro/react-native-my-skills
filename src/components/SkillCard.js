import React from 'react';
import {TouchableOpacity, Text, useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function SkillCard({skill}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundInput = {
    backgroundColor: isDarkMode ? '#1F1e25' : '#cccccc',
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const textColor = {
    color: isDarkMode ? Colors.light : Colors.dark,
  };

  return (
    <TouchableOpacity style={[backgroundInput, styles.buttonSkill]}>
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
