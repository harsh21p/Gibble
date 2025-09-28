import { Alert, Image, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Images from '../../assets/images';
import InputText from '../../components/InputText';
import OtpText from '../../components/OtpText';
import Icons from '../../assets/icons';
import IconView from '../../components/IconView';
import SignupLevel from '../../components/SignupLevel';

type Props = {};
const Signup = (props: Props) => {
  const onClickSignup = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.containerlogo}>
        <Image
          key={Images.logo.logomain}
          style={styles.logomain}
          source={Images.logo.logomain}
        />
      </View>

      <View style={styles.container0}>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Pressable
              onPress={() => onClickSignup()}
              style={styles.circlebutton}
            >
              <IconView src={Icons.logo.back} style={styles.icon} />
            </Pressable>

            <Image key={Images.logo.logomain} style={styles.imagemain} />
            <Pressable
              onPress={() => onClickSignup()}
              style={styles.circlebutton}
            >
              <IconView src={Icons.logo.back} style={styles.icon} />
            </Pressable>
          </View>
          <Text style={styles.text1}>
            {
              'Body content to be written here. All the\ndescription is to be written here'
            }
          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.container3}>
          {/* Main Form */}

          {/* <Text style={[styles.text, styles.name]}>{'Signup'}</Text>
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
          </Text> */}
          <SignupLevel style={{}} />
        </View>

        {/* After Otp */}
      </View>
    </View>
  );
};

export default Signup;
