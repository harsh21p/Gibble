import { Alert, Dimensions, Image, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './styles';
import Images from '../../assets/images';
import * as RootNavigation from '../../navigation/rootNavigation';
import routes from '..';
import { isTablet } from 'react-native-device-info';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { useSharedValue } from 'react-native-reanimated';
import CommonStyles from '../../styles/styles';
import CarouselComponent from '../../components/Carousel';
type Props = {};
const SplashScreen = (props: Props) => {
  const onClickStart = useCallback(() => {
    RootNavigation.navigate(routes.Signup);
  }, [])
  const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  const renderItem = useMemo(() => {
    return ({ index }) => (
      <View style={{ width: "100%", height: "100%", backgroundColor: '#EAF2FF', justifyContent: 'center', borderRadius: 4 }}>
        <Image key={Images.mobile.carousel} style={{
          width: "auto",
          height: 20,
          resizeMode: "contain"
        }} source={Images.mobile.carousel} />
      </View>
    )
  }, [])
  return (
    isTablet() ?
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
      : <SafeAreaView style={[styles.container, styles.mobileContainer, CommonStyles.appBackground]}>
        <View style={{ flex: 0.7, width: "100%", alignItems: "center", justifyContent: 'flex-end' }}>
          <Image
            key={Images.logo.splashLogo}
            style={{ height: "60%", width: "80%", resizeMode: "contain" }}
            source={Images.logo.logomain}
          />
          <Text style={{ fontStyle: "italic", color: "#666666", fontWeight: "600", fontSize: 20, textAlign: "center" }}>
            {`Immerse in the experience of\n learning.`}
          </Text>
        </View>
        <View style={{ flex: 2, width: "100%", gap: 10, paddingVertical: 30 }}>
          <CarouselComponent
            ref={ref}
            onPressPagination={onPressPagination}
            dotSize={7}
            onProgressChange={progress}
            width={screenWidth / 1.2}
            height={screenHeight / 2.5}
            data={[0, 1, 2, 3, 4]}
            renderItem={renderItem}
            dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 5 }}
            paginationContainerStyle={{ gap: 5, marginTop: 10, width: "100%", justifyContent: "flex-start" }}
            activeDotStyle={{ backgroundColor: '#006FFD' }}
          />
          <Text style={{ fontWeight: "800", fontSize: 24 }}>Manage Your Classes</Text>
        </View>
        <View style={{ width: "100%", }}>

          <Pressable onPress={onClickStart} style={styles.button}>
            <Text style={styles.btntext}>Get Started</Text>
          </Pressable>
        </View>
      </SafeAreaView>
  );
};

export default React.memo(SplashScreen);
