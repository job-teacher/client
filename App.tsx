import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootStackNavigator from '@navigations/RootStackNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import '@utils/kakao';
import '@utils/naver';
import '@utils/google';

const fullFlex = {
  flex: 1,
  backgroundColor: '#fff',
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={fullFlex}>
          <StatusBar barStyle={'dark-content'} />
          <RootStackNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
