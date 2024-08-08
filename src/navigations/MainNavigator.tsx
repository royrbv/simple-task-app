import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TaskPage from '../screens/TaskPage';
import AddPage from '../screens/AddPage';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Root' >
        <Stack.Screen name='TaskPage' component={TaskPage} options={{headerShown:false}} />
        <Stack.Screen name='AddPage' component={AddPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
