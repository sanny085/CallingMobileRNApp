import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CallScreen from '../screens/CallScreen';
import ContactsScreen from '../screens/ContactsScreen';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import LoginScreen from '../screens/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Stack.Group screenOptions={{headerShown: false}}>
          {/*1. While Calling*/}
          <Stack.Screen name="Calling" component={CallingScreen} />
          {/*2. On Call - Call started*/}
          <Stack.Screen name="Call" component={CallScreen} />
          {/*3. Incoming Call*/}
          <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
