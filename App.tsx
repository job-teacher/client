import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootStackNavigator from '@navigations/RootStackNavigator';
import '@utils/kakao';
import '@utils/naver';
import '@utils/google';

const fullFlex = {
  flex: 1,
  backgroundColor: '#fff',
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={fullFlex}>
        <StatusBar barStyle={'dark-content'} />
        <RootStackNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
