import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskPage from './src/screens/TaskPage';
import MainNavigator from './src/navigations/MainNavigator';

export default function App() {
  return (
    <>
      <MainNavigator/>
      <StatusBar style="auto"/>
    </>
  );
}

