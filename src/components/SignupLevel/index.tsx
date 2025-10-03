import { Alert, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Text } from 'react-native-gesture-handler';
import { useStringsContext } from '../../context/strings-context';
import Svg, { Line } from 'react-native-svg';
import DashedDivider from '../DashedDivider';
import Button from '../Button';
import InputText from '../InputText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../zod';
import z from 'zod';
type Props = {
  style: any;
  isTablet: boolean;
  onClickNext: SubmitHandler<any>;
};
const SignupLevel = ({ style, onClickNext, isTablet }: Props) => {
  const { stringsData } = useStringsContext();
  const [selected, setSelected] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    resolver: zodResolver(schema.SignUpSchema),
  });
  console.log(errors, getValues());
  const handleStepperrender = (index: number) => {
    switch (index) {
      case 1:
        return (
          <View style={[styles.container, style]}>
            <Text style={styles.titlePhone}>{stringsData?.signup?.main}</Text>
            {/* stepper */}
            <View style={styles.phoneStepperMain}>
              <View style={styles.phoneStepperSecondaryContainer}>
                <View style={styles.phoneStepper}>
                  <Text style={styles.stepperTextPhone}>1</Text>
                </View>
                <Text style={[styles.labelPhone]}>
                  {stringsData?.signup?.step1}
                </Text>
              </View>
              <View style={styles.phoneStepperSecondaryContainer}>
                <View style={styles.phoneStepper}>
                  <Text style={styles.stepperTextPhone}>2</Text>
                </View>
                <Text style={[styles.labelPhone]}>
                  {stringsData?.signup?.step2}
                </Text>
              </View>
              <View style={styles.phoneStepperSecondaryContainer}>
                <View style={styles.phoneStepper}>
                  <Text style={styles.stepperTextPhone}>3</Text>
                </View>
                <Text style={[styles.labelPhone]}>
                  {stringsData?.signup?.step3}
                </Text>
              </View>
            </View>
            <View style={[styles.middle, { gap: 15 }]}>
              {/* Row 1 */}
              <View style={{ gap: 15 }}>
                <Controller
                  control={control}
                  name="firstName"
                  render={({ field }) => (
                    <InputText
                      {...field}
                      isError={errors.firstName}
                      stylelable={styles.stylelable}
                      required
                      style={{ width: '100%' }}
                      styleInput={styles.inputMain}
                      placeholder={'First Name'}
                      lable={'First Name'}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="lastName"
                  render={({ field }) => (
                    <InputText
                      {...field}
                      isError={errors.lastName}
                      stylelable={styles.stylelable}
                      required
                      style={{ width: '100%' }}
                      styleInput={styles.inputMain}
                      placeholder={'Last Name'}
                      lable={'Last Name'}
                    />
                  )}
                />
              </View>

              {/* Row 2 */}
              <View style={{ gap: 15 }}>
                <Controller
                  control={control}
                  name="country"
                  render={({ field }) => (
                    <InputText
                      {...field}
                      isError={errors.country}
                      stylelable={styles.stylelable}
                      required
                      style={{ width: '100%' }}
                      styleInput={styles.inputMain}
                      placeholder={'Country'}
                      dropdown
                      lable={'Country'}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="city"
                  render={({ field }) => (
                    <InputText
                      {...field}
                      isError={errors.city}
                      stylelable={styles.stylelable}
                      required
                      style={{ width: '100%' }}
                      styleInput={styles.inputMain}
                      placeholder={'City'}
                      dropdown
                      lable={'City'}
                    />
                  )}
                />
              </View>
              {/* Row 3 */}
              <View style={styles.phoneLastRowStyle}>
                <Controller
                  control={control}
                  name="pincode"
                  render={({ field }) => (
                    <InputText
                      {...field}
                      isError={errors.pincode}
                      styleInput={styles.inputMain}
                      style={{ flex: 1 }}
                      stylelable={styles.stylelable}
                      placeholder={'Pin Code'}
                      lable={'Pin Code'}
                      required
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="age"
                  render={({ field: { onChange, ...rest } }) => (
                    <InputText
                      {...rest}
                      onChange={text => onChange(+text)}
                      isError={errors.age}
                      styleInput={styles.inputMain}
                      stylelable={styles.stylelable}
                      style={{ flex: 1 }}
                      placeholder={'26'}
                      lable={'Age'}
                      dropdown
                    />
                  )}
                />
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  return isTablet ? (
    <KeyboardAwareScrollView>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{stringsData?.signup?.main}</Text>
        {/* stepper */}
        <View style={styles.stepperMain}>
          <Text
            onPress={() => {
              setSelected(1);
            }}
            style={[styles.label, selected == 1 && styles.selected]}
          >
            {stringsData?.signup?.step1}
          </Text>
          <DashedDivider style={styles.line} />
          <Text
            onPress={() => {
              setSelected(2);
            }}
            style={[styles.label, selected == 2 && styles.selected]}
          >
            {stringsData?.signup?.step2}
          </Text>
          <DashedDivider style={styles.line} />
          <Text
            onPress={() => {
              setSelected(3);
            }}
            style={[styles.label, selected == 3 && styles.selected]}
          >
            {stringsData?.signup?.step3}
          </Text>
        </View>
        <View style={styles.middle}>
          {/* Row 1 */}
          <View style={styles.row}>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <InputText
                  {...field}
                  isError={errors.firstName}
                  stylelable={styles.stylelable}
                  required
                  style={styles.input}
                  styleInput={styles.inputMain}
                  placeholder={'First Name'}
                  lable={'First Name'}
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <InputText
                  {...field}
                  stylelable={styles.stylelable}
                  required
                  isError={errors.lastName}
                  style={styles.input}
                  styleInput={styles.inputMain}
                  placeholder={'Last Name'}
                  lable={'Last Name'}
                />
              )}
            />
          </View>

          {/* Row 2 */}
          <View style={styles.row}>
            <Controller
              control={control}
              name="country"
              render={({ field }) => (
                <InputText
                  {...field}
                  isError={errors.country}
                  stylelable={styles.stylelable}
                  required
                  style={styles.input}
                  styleInput={styles.inputMain}
                  placeholder={'Country'}
                  dropdown
                  lable={'Country'}
                />
              )}
            />
            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <InputText
                  {...field}
                  isError={errors.city}
                  stylelable={styles.stylelable}
                  required
                  style={styles.input}
                  styleInput={styles.inputMain}
                  placeholder={'City'}
                  dropdown
                  lable={'City'}
                />
              )}
            />
          </View>
          {/* Row 3 */}
          <View style={styles.row}>
            <Controller
              control={control}
              name="pincode"
              render={({ field }) => (
                <InputText
                  {...field}
                  isError={errors.pincode}
                  styleInput={styles.inputMain}
                  style={styles.singleInput}
                  stylelable={styles.stylelable}
                  placeholder={'Pin Code'}
                  lable={'Pin Code'}
                  required
                />
              )}
            />
          </View>

          {/* Row 4 */}
          <View style={styles.row}>
            <Controller
              control={control}
              name="age"
              render={({ field }) => (
                <InputText
                  {...field}
                  isError={errors.age}
                  styleInput={styles.inputMain}
                  stylelable={styles.stylelable}
                  style={styles.singleInputAge}
                  placeholder={'26'}
                  lable={'Age'}
                  dropdown
                />
              )}
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <Button
            style={styles.next}
            textStyle={styles.textStyle}
            title="Next"
            onClickSignup={handleSubmit(onClickNext)}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  ) : (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.keyboardAwareContainerPhoneStyle}
    >
      {handleStepperrender(selected)}

      <View style={[styles.buttonViewPhone]}>
        <Button
          style={styles.next}
          textStyle={styles.textStyle}
          title="Next"
          onClickSignup={() => {
            handleSubmit(onClickNext)();
            if (Object.keys(errors).length == 0) {
              setSelected(2);
            }
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignupLevel;
