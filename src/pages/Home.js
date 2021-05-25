import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };

  const textColor = {
    color: isDarkMode ? Colors.light : Colors.dark,
  };

  const backgroundGrid = {
    backgroundColor: isDarkMode ? '#1f1e25' : '#999999',
  };

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={[backgroundStyle, styles.container]}>
      <Text style={[styles.title, textColor]}>Welcome, Jonathas.</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}>
        <Text style={styles.buttontText}>Add</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          textColor,
          {
            marginVertical: 50,
          },
        ]}>
        My Skills
      </Text>

      {mySkills.map(skill => (
        <TouchableOpacity
          key={skill + Math.random()}
          style={[backgroundGrid, styles.buttonSkill]}>
          <Text style={[textColor, styles.textSkill]}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
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
