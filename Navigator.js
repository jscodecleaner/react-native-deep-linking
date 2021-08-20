import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Hello from './src/screens/containers/Hello/Hello'
import World from './src/screens/containers/World/World'
import BottomTab from './src/screens/components/BottomTab/BottomTab'
import linking from './src/linking'

const Navigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
