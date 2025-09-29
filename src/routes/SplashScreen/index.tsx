import { Alert, Image, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles';
import Images from '../../assets/images';
import * as RootNavigation from '../../navigation/rootNavigation';
import routes from '..';
type Props = {};
const SplashScreen = (props: Props) => {
  const onClickStart = useCallback(() => {
    RootNavigation.navigate(routes.Signup);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Hello!\nLet’s begin your journey with'}</Text>
      <Image
        key={Images.logo.splashLogo}
        style={styles.logo}
        source={Images.logo.splashLogo}
      />
      <Pressable onPress={onClickStart} style={styles.button}>
        <Text style={styles.btntext}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(SplashScreen);
