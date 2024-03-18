/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import NavigationService from '@src/utils/navigation';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from '@src/config-store';
import { Provider } from 'react-redux';
import Router from '@src/navigation/root-switch';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const { store } = configureStore();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar
        barStyle={'light-content'}
        // backgroundColor={isDarkMode ? 'black' : 'white'}
        backgroundColor={'transparent'}
        translucent={true}
      />

      <NavigationContainer
        ref={navigationRef =>
          NavigationService.setTopLevelNavigator(navigationRef)
        }>
        <Provider store={store}>
          <SafeAreaProvider>
            <Router />
          </SafeAreaProvider>
        </Provider>
      </NavigationContainer>
    </View>
  );
};

export default App;
