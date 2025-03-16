import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const fullFlex = {
  flex: 1,
  backgroundColor: '#fff',
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={fullFlex}>
        <StatusBar barStyle={'dark-content'} />
        <View>
          <Text>{'with T'}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
