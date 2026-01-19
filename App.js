// App.js
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='default' />
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
