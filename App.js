import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './components/Navigator/StackNavigator';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
        <NavigationContainer style={styles.container}>      
           <StackNavigator/>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
