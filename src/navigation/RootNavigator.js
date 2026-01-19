import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StackNavigator from './StackNavigator'

const RootNavigator = () => {
  return (
     <NavigationContainer screenOptions={{ headerShown: false }}>
        <StackNavigator />
            </NavigationContainer>
  )
}

export default RootNavigator