import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeController from '@controllers/Home';
import {screenName} from '@constants/screenName';
import WishJobController from '~/controllers/WishJob';
import MyPageController from '~/controllers/MyPage';

export type RootStackParams = {
  [screenName.Home]: undefined;
  [screenName.WishJob]: undefined;
  [screenName.MyPage]: undefined;
};

export const navigationRef =
  React.createRef<NavigationContainerRef<Record<screenName, unknown>>>();

const RootStackNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false, animation: 'fade'}}>
        <RootStack.Screen
          name={screenName.Home}
          component={HomeController}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name={screenName.WishJob}
          component={WishJobController}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name={screenName.MyPage}
          component={MyPageController}
          options={{gestureEnabled: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

RootStackNavigator.displayName = 'RootNavigator';

export default RootStackNavigator;
