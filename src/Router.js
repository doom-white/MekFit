import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';
import MemberSign from './pages/MemberSign';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          // options={{headerShown: false}} local olarak başlığı kapatmak için
        />
        <Stack.Screen
          name="sign"
          component={MemberSign}
          // options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
