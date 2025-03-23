import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootStackNavigator from '@navigations/RootStackNavigator';
import '@utils/kakao';
import '@utils/naver';
import '@utils/google';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
