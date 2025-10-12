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

function App(): React.ReactElement {
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
  EStyleSheet.build({
    $primaryBgColor: '#305EFF',
    $whiteText: '#ffffff',
    $darkText: '#1F2024',
    $blurBgColor: '#eaeaeaff',
    $disabledTextColor: '#8F9098',
    $filledBgColor: '#B4DBFF',
    $unSelectColor: '#40566D',
    $fadedBorderColor: '#6c849D',
    $errorTextColor: "#D92D20"
  });
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
