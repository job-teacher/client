import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeController from '@controllers/Home';
import {screenName} from '@constants/screenName';

export type RootStackParams = {
  [screenName.Home]: undefined;
};

export const navigationRef =
  React.createRef<NavigationContainerRef<Record<screenName, unknown>>>();

const RootStackNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false, animation: 'fade'}}>
        <RootStack.Screen name={screenName.Home} component={HomeController} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

RootStackNavigator.displayName = 'RootNavigator';

export default RootStackNavigator;
