/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform, StatusBar } from 'react-native';
// import SplashScreen from "react-native-splash-screen";
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import StringsDataProvider, { StringsContext } from './context/strings-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';

function App(): React.JSX.Element {
  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //     PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
  //     );
  //     const timer = setTimeout(() => {
  //       SplashScreen.hide();
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);
  EStyleSheet.build()
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <StringsDataProvider>
          <AppNavigator />
        </StringsDataProvider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
