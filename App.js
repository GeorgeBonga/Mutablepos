import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import AppNavigator from "./navigation/AppNavigator";
import React from "react";
import "./global.css";


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <AppNavigator />
      </View>
  
  );
};

export default App;
