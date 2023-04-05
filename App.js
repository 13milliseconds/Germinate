import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

//Components
import LoadingScreen from './components/loadingScreen'
import SigninScreen from './components/signinScreen'
import HomeScreen from './components/homeScreen'
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
  const {user, error} = useAuth0();

  // if (isLoading) {
  //   return <NativeBaseProvider theme={theme}>
  //       <LoadingScreen />
  //     </NativeBaseProvider>
  // }

  return (
    <Auth0Provider domain={"seedtofruit.us.auth0.com"} clientId={"bjyTtOlpNHSSqq2xMcj7t9utyonKzP8q"}>
    <NavigationContainer>
    <NativeBaseProvider theme={theme}>
    <Stack.Navigator>
        {!user ? (
          <Stack.Screen
            name="SignIn"
            component={SigninScreen}
            options={{
              title: 'Sign in',
            }}
            initialParams={{ user }}
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
    </Auth0Provider>
  );
}

