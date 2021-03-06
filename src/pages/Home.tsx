import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../components/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetting, setGretting] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };

  const textColor = {
    color: isDarkMode ? Colors.light : Colors.dark,
  };

  const backgroundInput = {
    backgroundColor: isDarkMode ? '#1F1e25' : '#cccccc',
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good Night');
    }
  }, []);

  return (
    <View style={[backgroundStyle, styles.container]}>
      <Text style={[styles.title, textColor]}>Welcome, Jonathas.</Text>
      <Text style={textColor}>{greetting}</Text>

      <TextInput
        style={[styles.input, backgroundInput]}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add" />

      <Text style={[styles.title, textColor, {marginVertical: 50}]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
