import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { navigationRef } from './rootNavigation';
import routes from '../routes';
import { useStringsContext } from '../context/strings-context';
import { useAuthContext } from '../context/use-auth-context';
import {
  getStorageItem,
  removeItem,
  setItem,
} from '../hooks/use-async-storage';
import FullScreenLoader from '../components/FullScreenLoader';
import { keys } from '../constants/async-storage-keys';

const RootStack = createStackNavigator();
const MyHomeStack = createStackNavigator();
const MySettingStack = createStackNavigator();
const MyProfileStack = createStackNavigator();
const MyIntroStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const routesToHideBottomNav = [routes.SplashScreen];
const SplashScreen = lazy(() => import('../routes/SplashScreen'));
const Signup = lazy(() => import('../routes/Signup'));
const AppNavigator = () => {
  const { authData } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [onBoarded, setIsOnBoarded] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const dispatch = useAppDispatch();
  const { stringsData, svgData } = useStringsContext();
  const [isForceUpdate, setIsForceUpdate] = useState(false);
  const [newVersion, setNewVersion] = useState('');

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const languageSelection = await getStorageItem(keys.language);
  };

  const getOptions = (
    label: string,
    iconActive: string,
    iconNotActive: string,
    def: number,
  ) => {
    return {
      tabBarLabel: label,
      tabBarIcon: ({ focused }: any) => (
        // <SVGIcon
        //   uri={focused ? iconActive : iconNotActive}
        //   style={[
        //     styles.icons,
        //     focused ? styles.activeColor : styles.inactiveColor,
        //   ]}
        // />
        <View style={styles.icon}>
          {/* {def == 0 ? (
            <Icon
              name={focused ? iconActive : iconNotActive}
              color={focused ? "black" : "gray"}
              size={25}
            />
          ) : def == 1 ? (
            <Icon1
              name={focused ? iconActive : iconNotActive}
              color={focused ? "black" : "gray"}
              size={25}
            />
          ) : (
            <Icon2
              name={focused ? iconActive : iconNotActive}
              color={focused ? "black" : "gray"}
              size={25}
            />
          )} */}
        </View>
      ),
    };
  };

  // const MyHomeNavigator = useCallback(() => {
  //   return (
  //     <MyHomeStack.Navigator
  //       initialRouteName={routes.Dashboard}
  //       screenOptions={{
  //         headerShown: false,
  //         gestureEnabled: false,
  //       }}
  //     >
  //       {/* <MyHomeStack.Screen name={routes.Dashboard} component={Dashboard} />
  //       <MyHomeStack.Screen name={routes.addEntry} component={AddEntry} />
  //       <MyHomeStack.Screen name={routes.addMaterial} component={AddMaterial} />*/}

  //     </MyHomeStack.Navigator>
  //   );
  // }, []);

  // const MyProfileNavigator = useCallback(() => {
  //   return (
  //     <MyProfileStack.Navigator
  //       initialRouteName={routes.MyProfile}
  //       screenOptions={{
  //         headerShown: false,
  //         gestureEnabled: false,
  //       }}
  //     >
  //       <MyProfileStack.Screen name={routes.MyProfile} component={MyProfile} />
  //     </MyProfileStack.Navigator>
  //   );
  // }, []);

  // const SettingsNavigator = useCallback(() => {
  //   return (
  //     <MySettingStack.Navigator
  //       initialRouteName={routes.Settings}
  //       screenOptions={{
  //         headerShown: false,
  //         gestureEnabled: false,
  //       }}
  //     >
  //       <MySettingStack.Screen name={routes.Settings} component={Settings} />
  //       <MySettingStack.Screen
  //         name={routes.Language}
  //         component={LanguageScreen}
  //       />
  //     </MySettingStack.Navigator>
  //   );
  // }, []);

  /**Bottom Navigation stack screens */
  // const BottomTabNavigator = useCallback(() => {
  //   return (
  //     <Tab.Navigator
  //       initialRouteName={routes.HomeNavigator}
  //       screenOptions={{
  //         headerShown: false,
  //         tabBarActiveTintColor: styles.activeColor.color,
  //         tabBarInactiveTintColor: styles.inactiveColor.color,
  //         tabBarLabelStyle: { marginBottom: 10 },
  //         tabBarStyle: { height: Platform.OS === "ios" ? 95 : 70 },
  //         unmountOnBlur: true,
  //       }}
  //     >
  //       <Tab.Screen
  //         name={routes.HomeNavigator}
  //         component={MyHomeNavigator}
  //         options={({ route }) => {
  //           const focusedRouteName = getFocusedRouteNameFromRoute(route) || "";
  //           if (routesToHideBottomNav.includes(focusedRouteName)) {
  //             return {
  //               tabBarStyle: { display: "none" },
  //             };
  //           }
  //           return getOptions(stringsData?.home, "home", "home", 0);
  //         }}
  //       />

  //       <Tab.Screen
  //         name={routes.MyProfileNavigator}
  //         component={MyProfileNavigator}
  //         options={({ route }) => {
  //           const focusedRouteName = getFocusedRouteNameFromRoute(route) || "";
  //           if (routesToHideBottomNav.includes(focusedRouteName)) {
  //             return {
  //               tabBarStyle: { display: "none" },
  //             };
  //           }
  //           return getOptions(
  //             stringsData?.myProfile,
  //             "account-box",
  //             "account-box",
  //             1
  //           );
  //         }}
  //       />
  //       <Tab.Screen
  //         name={routes.SettingsNavigator}
  //         component={SettingsNavigator}
  //         options={({ route }) => {
  //           const focusedRouteName = getFocusedRouteNameFromRoute(route) || "";
  //           if (routesToHideBottomNav.includes(focusedRouteName)) {
  //             return {
  //               tabBarStyle: { display: "none" },
  //             };
  //           }
  //           return getOptions(
  //             stringsData?.notification,
  //             "settings",
  //             "settings",
  //             2
  //           );
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }, [MyHomeNavigator, svgData, stringsData]);

  const IntroScreens = useCallback(() => {
    return (
      <MyIntroStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <MyIntroStack.Screen
          name={routes.IntroscreenOne}
          component={IntroscreenOne}
        /> */}
        <MyIntroStack.Screen
          name={routes.SplashScreen}
          children={(props: any) => (
            <Suspense fallback={<FullScreenLoader />}>
              <SplashScreen {...props} />
            </Suspense>
          )}
        />
      </MyIntroStack.Navigator>
    );
  }, []);

  const AuthNavigator = useCallback(() => {
    // return
    // authData.accessToken !== undefined && authData.accessToken !== "" ? (
    //   <RootStack.Group screenOptions={{ headerShown: false }}>
    //     {!languageSelected && (
    //       <RootStack.Screen name={routes.Language} component={LanguageScreen} />
    //     )}
    //     <RootStack.Screen
    //       name={routes.BottomTabNavigator}
    //       component={BottomTabNavigator}
    //     />
    //   </RootStack.Group>
    // ) : (
    return (
      <RootStack.Group screenOptions={{ headerShown: false }}>
        {!onBoarded && (
          <RootStack.Screen
            name={routes.SplashScreen}
            component={IntroScreens}
          />
        )}
        <RootStack.Screen
          name={routes.Signup}
          
          children={(props: any) => (
            <Suspense fallback={<FullScreenLoader />}>
              <Signup/>
            </Suspense>
          )}
        />
      </RootStack.Group>
    );
    // );
  }, [authData, onBoarded]);

  return loading ? (
    <FullScreenLoader customStyle={styles.loadingContainer} />
  ) : (
    <NavigationContainer ref={navigationRef}>
      {/* {isForceUpdate && <ForceUpdatePopup newVersion={version} />} */}
      <RootStack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        {AuthNavigator()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  icons: {
    height: 24,
    width: 24,
    top: 5,
  },
  icon: {
    paddingTop: 10,
  },
  activeColor: {
    color: 'black',
  },
  inactiveColor: {
    color: 'gray',
  },
  loadingContainer: {
    zIndex: 1,
  },
});
