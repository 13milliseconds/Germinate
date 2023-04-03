import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/homeScreen'
import SettingsScreen from './components/settingsScreen'
import SeedsScreen from './components/seedsScreen'
import BedsScreen from './components/bedsScreen'
import SproutsScreen from './components/sproutsScreen'

const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <NavigationContainer>
    <NativeBaseProvider theme={theme}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Seeds" component={SeedsScreen} />
        <Tab.Screen name="Sprouts" component={SproutsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Beds" component={BedsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

