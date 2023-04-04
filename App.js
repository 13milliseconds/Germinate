import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoadingScreen from './components/loadingScreen'
import SigninScreen from './components/signinScreen'
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

function MainNav() {
  return <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Seeds" component={SeedsScreen} />
    <Tab.Screen name="Sprouts" component={SproutsScreen} />
    <Tab.Screen name="Beds" component={BedsScreen} />
  </Tab.Navigator>
  }

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    return <NativeBaseProvider theme={theme}>
        <LoadingScreen />
      </NativeBaseProvider>
  }

  return (
    <NavigationContainer>
    <NativeBaseProvider theme={theme}>
    <Stack.Navigator>
        {userToken == null ? (
          <Stack.Screen
            name="SignIn"
            component={SigninScreen}
            options={{
              title: 'Sign in',
            }}
            initialParams={{ setUserToken }}
          />
        ) : (
          <Stack.Screen
          name="Main"
          component={MainNav}
          options={{
            headerShown: false,
          }}
          />
      )}
      </Stack.Navigator>
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

