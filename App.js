import React from 'react';
import {Home} from './src/pages/Home';
import {StatusBar, useColorScheme} from 'react-native';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </>
  );
}
