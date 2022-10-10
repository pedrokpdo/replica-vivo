import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { AppStack } from './src/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      <StatusBar translucent={false} backgroundColor={'purple'} />
    </NavigationContainer>
  );
}
