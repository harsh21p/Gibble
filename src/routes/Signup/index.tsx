import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useReducer, useState } from 'react';
import styles from './styles';
import Images from '../../assets/images';
import InputText from '../../components/InputText';
import OtpText from '../../components/OtpText';
import Icons from '../../assets/icons';
import IconView from '../../components/IconView';
import SignupLevel from '../../components/SignupLevel';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isTablet } from 'react-native-device-info';
import { IpersonalDetailsDropDownVisibility } from '../../types';
import Orientation from 'react-native-orientation-locker';
import {
  personalDetailsDropDownReducer,
  personalDetailsDropDownVisibility,
} from './signupService';
import { useDimensionsContext } from '../../context/dimensions';
type Props = {};
const Signup = (props: Props) => {
  const onClickSignup = () => { };
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const { screenDimensions } = useDimensionsContext()


  const [dropDownVisibilityState, dispatchDropDownVisibility] = useReducer(
    personalDetailsDropDownReducer,
    personalDetailsDropDownVisibility,
  );
  /**
   *
   * @param index
   */
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

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={isTablet() ? styles.containerlogo : styles.containerPhone}>
        <Image
          key={Images.logo.logoMain}
          style={isTablet() ? styles.logoMainTablet : styles.logoMainPhone}
          source={Images.logo.logoMain}
        />
      </View>

      <TouchableWithoutFeedback
        onPress={e => {
          if (Object.values(dropDownVisibilityState).some(item => item)) {
            dispatchDropDownVisibility({ type: 'All', payload: false });
          }
        }}
      >
        <View style={styles.container0}>
          {isTablet() ? (
            <View style={{ paddingLeft: 30 }}>
              {/* <Pressable
              onPress={() => onClickSignup()}
              style={styles.circlebutton}
            >
              <IconView src={Icons.logo.back} style={styles.icon} />
            </Pressable>

            <Image key={Images.logo.logoMain} style={styles.imagemain} />
            <Pressable
              onPress={() => onClickSignup()}
              style={styles.circlebutton}
            >
              <IconView src={Icons.logo.back} style={styles.icon} />
            </Pressable> */}
              <Carousel
                ref={ref}
                onProgressChange={progress}
                mode="horizontal-stack"
                modeConfig={{
                  snapDirection: 'left',
                  stackInterval: 10,
                }}
                width={screenDimensions.screenWidth / 3}
                height={screenDimensions.screenHeight / 4}
                data={[0]}
                renderItem={({ index }) => (
                  <Image key={Images.logo.logoMain} style={styles.imagemain} />
                )}
              />
              <Pagination.Basic
                progress={progress}
                data={[0]}
                dotStyle={{
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  borderRadius: 50,
                }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
              />
              <Text style={styles.text1}>
                {
                  'Body content to be written here. All the\ndescription is to be written here'
                }
              </Text>
            </View>
          ) : null}

          {isTablet() ? (
            <View style={[styles.line, { height: screenDimensions.screenHeight / 2 }]} />
          ) : null}
          {/* Main Form  */}
          {/* <View style={styles.container3}>

          <Text style={[styles.text, styles.name]}>{'Signup'}</Text>
          <InputText
            required={true}
            style={styles.input}
            lable={'Email address'}
            placeholder={'Enter email'}
          />
          <OtpText
            style={styles.input}
            lable={'Enter OTP'}
            placeholder={'0'}
            inputs={4}
            error={'A 4-digit OTP has been sent to your contact number.'}
          />
         <Button title="Signup" onClickSignup={() => Alert.alert('Signup')} style={styles.button}/>
          <Text style={styles.text}>
            {'Already have an account ? '}
            <Text style={[styles.name, { fontSize: 14 }]}>{'Login'}</Text>
          </Text>
          <SignupLevel style={{}} />
        </View> */}

          {isTablet() ? (
            <SignupLevel
              dropDownVisibilityState={dropDownVisibilityState}
              dispatchDropDownVisibility={dispatchDropDownVisibility}
              style={{}}
              isTablet={true}
              onClickNext={() => console.log('nextClicked')}
            />
          ) : (
            <SignupLevel
              dropDownVisibilityState={dropDownVisibilityState}
              dispatchDropDownVisibility={dispatchDropDownVisibility}
              style={{}}
              isTablet={false}
              onClickNext={() => console.log('nextClicked')}
            />
          )}

          {/* After Otp */}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Signup;
