import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import UserSigninScreen from '../components/UserSigninScreen';
import ChatScreen from '../components/ChatScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="user">
      <Stack.Screen name="user" component={UserSigninScreen} />
      <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
