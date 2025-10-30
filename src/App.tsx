/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Dimensions,
  StatusBar,
} from 'react-native';
// import SplashScreen from "react-native-splash-screen";
import AppNavigator from './navigation';
import StringsDataProvider from './context/strings-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StaticDataNamespace } from './constants/staticData';
import axios from 'axios';
import { BaseURL } from './context/use-environment';
import {
  useDimensionsContext,
} from './context/dimensions';

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
    $errorTextColor: '#D92D20',
    $labelTextColor: '#40566D',
    $textInputBgcolor: '#6C849D1F',
    $dropDownBgColor: 'rgba(220, 220, 220, 1)',
    $successColor: '#34C759',
  });
  const { screenDimensions, setScreenDimensions } = useDimensionsContext();
  useEffect(() => {
    (async () => {
      try {
        let result = await axios.get(BaseURL.COUNTRIES_URL?.baseUrl);
        if (result.status == 200) {
          let data: StaticDataNamespace.iCitiesWithCountry[] =
            result.data?.data;
          data.forEach(({ country, cities, iso2 }) => {
            StaticDataNamespace.CitiesObjectWithCountry[country] = cities;
            StaticDataNamespace.countries.push({ name: country, code: iso2 });
          });
        }
      } catch (error) {
        console.log('Error in fetching countries', JSON.stringify(error));
      }
    })();

    let result = Dimensions.addEventListener('change', () => {
      setScreenDimensions({
        screenHeight: Dimensions.get('screen').height,
        screenWidth: Dimensions.get('screen').width,
      });
    });
    return () => result.remove();
  }, []);

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
