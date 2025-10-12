import {
  Alert, EmitterSubscription, FlatList, Keyboard, TextInput,
  TouchableOpacity, View, Text
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useStringsContext } from '../../context/strings-context';
import Svg, { Line } from 'react-native-svg';
import DashedDivider from '../DashedDivider';
import Button from '../Button';
import InputText from '../InputText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Controller, ErrorOption, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../zod';
import z from 'zod';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  musicalDataInstance,
  StaticDataNamespace,
} from '../../constants/staticData';
import DeviceInfo from 'react-native-device-info';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { handleMusicalDetailsState } from '../../utils/commonFunctions';
import { EiconDisplay, iMusicalDetailsErrors, ImusicClassDetails } from '../../types';
import Icon from 'react-native-vector-icons';
import MaterialIcons from '../Icons/MaterialIcons';



type Props = {
  style: any;
  isTablet: boolean;
  onClickNext: () => void;
};

const SignupLevel = ({ style, onClickNext, isTablet }: Props) => {
  const { stringsData } = useStringsContext();
  const [selected, setSelected] = useState(1);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [muscialDetails, setMusicalDetails] = useState<ImusicClassDetails>(musicalDataInstance);
  const [musicalDetailsError, setMusicalDetailsError] = useState<iMusicalDetailsErrors>({
    className: { message: "Please enter your classname", isError: false }, Instruments: { message: "Please select your instrument", isError: false },
    Experience: { message: "Please select total years of experience", isError: false },
    ModeOfTeaching: { message: "Please select your mode of teaching", isError: false },
    Students: { message: "Please select the number of students you have", isError: false }
  })
  const { INSTRUMENTS, EXPERIENCE, MODE_OF_TEACHING, STUDENTS } = StaticDataNamespace.MusicalDetailsKeys;
  const { register, handleSubmit, formState: { errors }, control, getValues, } = useForm({
    resolver: zodResolver(schema.SignUpSchema),
  });
  const classNameRegex = /[a-zA-Z0-9]+\s*/;
  const classNameRef = useRef<string>("");
  const insets = useSafeAreaInsets();
  /**
   * 
   */
  const renderItems = useCallback(({ value, isSelected }: { isSelected: boolean; value: string },
    index: number,
    key: StaticDataNamespace.MusicalDetailsKeys
  ) => {
    return (
      <TouchableOpacity
        key={`${index}-${key}`}
        onPress={() => handleMusicalDetailsState(setMusicalDetails, setMusicalDetailsError, key, value)}
      >
        <Text
          style={[
            styles.multiSelectTextStyle,
            isSelected && styles.selectedMusicalDetailsStyle,
          ]}
        >
          {value}
        </Text>
      </TouchableOpacity>
    );
  },
    [],
  );

  useEffect(() => {
    let listners: EmitterSubscription[] = [
      Keyboard.addListener('keyboardWillShow', e => setIsKeyboardVisible(true)),
      Keyboard.addListener('keyboardWillHide', e =>
        setIsKeyboardVisible(false),
      ),
    ];
    return () => listners.forEach(event => event.remove());
  }, []);
  /**
   * A function to handle and validate the submit data
   * @returns void
   */
  const handleNextSubmit = useCallback(() => {
    console.log(selected)
    switch (selected) {
      case 1: {
        return handleSubmit(
          () => {
            onClickNext();
            setSelected(prev => (prev <= 2 ? prev + 1 : prev));
          },
          () => {
            // An alert to be shown when error 
            setSelected(prev => (prev <= 2 ? prev + 1 : prev));
          },
        )()
      }
      case 2: {
        const { musicClassName, Experience, Instruments, Students, ModeOfTeaching } = muscialDetails;
        console.log(classNameRef.current, classNameRegex.test(classNameRef.current))
        const isValid = classNameRegex.test(classNameRef.current) && [Experience, Instruments, Students, ModeOfTeaching].every(item => item.some(element => element.isSelected));
        setMusicalDetailsError((prev: any) => ({
          ...prev,
          className: { ...prev.className, isError: !classNameRegex.test(classNameRef.current) ? true : false },
          Experience: { ...prev.Experience, isError: !Experience.some(element => element.isSelected) ? true : false },
          Students: { ...prev.Students, isError: !Students.some(element => element.isSelected) ? true : false },
          ModeOfTeaching: { ...prev.ModeOfTeaching, isError: !ModeOfTeaching.some(element => element.isSelected) ? true : false },
          Instruments: { ...prev.Instruments, isError: !Instruments.some(element => element.isSelected) ? true : false }
        }))
        if (isValid) {
          onClickNext();
          setSelected(prev => (prev <= 2 ? prev + 1 : prev));
        }
      }
    }
  }, [selected, muscialDetails]);
  /**
   * 
   * @param index 
   * @returns 
   */
  const handleStepperrender = (index: number) => {
    switch (index) {
      case 1:
        return (
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
                    labelStyle={styles.labelStyle}
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
                    labelStyle={styles.labelStyle}
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
                    labelStyle={styles.labelStyle}
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
                    labelStyle={styles.labelStyle}
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
                    labelStyle={styles.labelStyle}
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
                    labelStyle={styles.labelStyle}
                    style={{ flex: 1 }}
                    placeholder={'26'}
                    lable={'Age'}
                    dropdown
                  />
                )}
              />
            </View>
          </View>
        );
      case 2:
        return (
          <View style={[styles.middle, { gap: 5 }]}>
            {/* Row 1 */}
            <View style={{ gap: 15 }}>
              <InputText
                isError={musicalDetailsError?.className.isError ? musicalDetailsError?.className : { message: "" }}
                labelStyle={styles.labelStyle}
                onChange={text => {
                  if (musicalDetailsError?.className.isError && classNameRegex.test(text)) {
                    setMusicalDetailsError((prev: any) => ({ ...prev, className: { isError: false } }))
                  }
                  classNameRef.current = text
                }}
                required
                style={{ width: '100%' }}
                styleInput={styles.inputMain}
                placeholder={'Class Name'}
                lable={'Name of your classes'}
              />
            </View>

            {/* Row 2 */}
            <View style={{ gap: 15 }}>
              <Text style={styles.labelStyle}>
                Which instrument do you offer lessons for?
              </Text>
              <View style={{ gap: 2 }}>
                <View style={styles.listStyle}>
                  {muscialDetails.Instruments.map((item, index) =>
                    renderItems(item, index, INSTRUMENTS),
                  )}
                </View>
                <MaterialIcons
                  display={musicalDetailsError?.Instruments?.isError ? EiconDisplay.visbile : EiconDisplay.hidden}
                  color={EStyleSheet.value("$errorTextColor")} name='info-outline'
                  labelText={musicalDetailsError?.Instruments?.message}
                  labelTextStyle={[styles.errorTextStyle]}
                />
              </View>
            </View>
            {/* Row 3 */}
            <View style={{ gap: 15 }}>
              <Text style={styles.labelStyle}>Total years of experience</Text>
              <View style={{gap: 3}}>
                <View style={styles.listStyle}>
                  {muscialDetails.Experience.map((item, index) =>
                    renderItems(item, index, EXPERIENCE),
                  )}
                </View>
                <MaterialIcons
                  display={musicalDetailsError?.Experience?.isError ? EiconDisplay.visbile : EiconDisplay.hidden}
                  color={EStyleSheet.value("$errorTextColor")} name='info-outline'
                  labelText={musicalDetailsError?.Experience?.message}
                  labelTextStyle={styles.errorTextStyle}
                />
              </View>
            </View>
            <View style={{ gap: 15 }}>
              <Text style={styles.labelStyle}>
                How many students do you currently have?
              </Text>
              <View style={{gap: 3}}>
                <View style={styles.listStyle}>
                  {muscialDetails.Students.map((item, index) =>
                    renderItems(item, index, STUDENTS),
                  )}
                </View>
                <MaterialIcons
                  display={musicalDetailsError?.Students?.isError ? EiconDisplay.visbile : EiconDisplay.hidden}
                  color={EStyleSheet.value("$errorTextColor")} name='info-outline'
                  labelText={musicalDetailsError?.Students?.message}
                  labelTextStyle={styles.errorTextStyle}
                />
              </View>
            </View>
            <View style={{ gap: 15 }}>
              <Text style={styles.labelStyle}>Mode of teaching</Text>
              <View style={{gap: 3}}>
                <View style={styles.listStyle}>
                  {muscialDetails.ModeOfTeaching.map((item, index) =>
                    renderItems(item, index, MODE_OF_TEACHING),
                  )}
                </View>
                <MaterialIcons
                  display={musicalDetailsError?.ModeOfTeaching?.isError ? EiconDisplay.visbile : EiconDisplay.hidden}
                  color={EStyleSheet.value("$errorTextColor")} name='info-outline'
                  labelText={musicalDetailsError?.ModeOfTeaching?.message}
                  labelTextStyle={styles.errorTextStyle}
                />
              </View>
            </View>
            <View style={styles.phoneLastRowStyle}></View>
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
                  labelStyle={styles.labelStyle}
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
                  labelStyle={styles.labelStyle}
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
                  labelStyle={styles.labelStyle}
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
                  labelStyle={styles.labelStyle}
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
                  labelStyle={styles.labelStyle}
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
                  labelStyle={styles.labelStyle}
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
      nestedScrollEnabled={true}
      enableOnAndroid={true}
      contentContainerStyle={[
        styles.keyboardAwareContainerPhoneStyle,
        { flexGrow: isKeyboardVisible ? 0 : 1 },
      ]}
    >
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
          flex: insets.bottom == 0 ? 0 : isKeyboardVisible ? 0 : 1,
        }}
        nestedScrollEnabled={true}
      >
        <View style={[styles.container, style]}>
          <Text style={styles.titlePhone}>{stringsData?.signup?.main}</Text>
          {/* stepper */}
          <View style={styles.phoneStepperMain}>
            <View style={styles.phoneStepperSecondaryContainer}>
              <View
                style={[
                  styles.phoneStepper,
                  selected > 1 && styles.formCompletedStyles,
                ]}
              >
                <Text
                  style={[
                    styles.stepperTextPhone,
                    selected > 1 && styles.tickMarkStyle,
                  ]}
                >
                  {selected > 1 ? '✓' : 1}
                </Text>
              </View>
              <Text
                style={[
                  styles.labelPhone,
                  selected > 1 && styles.disabledTextStyle,
                ]}
              >
                {stringsData?.signup?.step1}
              </Text>
            </View>
            <View style={styles.phoneStepperSecondaryContainer}>
              <View
                style={[
                  styles.phoneStepper,
                  selected < 2 && styles.disabledBgStyle,
                  selected > 2 && styles.formCompletedStyles,
                ]}
              >
                <Text
                  style={[
                    styles.stepperTextPhone,
                    selected < 2 && styles.disabledTextStyle,
                    selected > 2 && styles.tickMarkStyle,
                  ]}
                >
                  {selected > 2 ? '✓' : 2}
                </Text>
              </View>
              <Text
                style={[
                  styles.labelPhone,
                  selected < 2 && styles.disabledTextStyle,
                  selected > 2 && styles.disabledTextStyle,
                ]}
              >
                {stringsData?.signup?.step2}
              </Text>
            </View>
            <View style={styles.phoneStepperSecondaryContainer}>
              <View
                style={[
                  styles.phoneStepper,
                  selected < 3 && styles.disabledBgStyle,
                ]}
              >
                <Text
                  style={[
                    styles.stepperTextPhone,
                    selected < 3 && styles.disabledTextStyle,
                  ]}
                >
                  3
                </Text>
              </View>
              <Text
                style={[
                  styles.labelPhone,
                  selected < 3 && styles.disabledTextStyle,
                ]}
              >
                {stringsData?.signup?.step3}
              </Text>
            </View>
          </View>
          {handleStepperrender(selected)}
        </View>
        <View
          style={[
            styles.buttonViewPhone,
            selected > 1 && styles.multipleButtonsView,
          ]}
        >
          {selected > 1 ? (
            <Button
              style={styles.buttonStyleOutline}
              textStyle={styles.textStyleOutline}
              title="Back"
              onClickSignup={() => {
                setSelected(prev => prev - 1);
              }}
            />
          ) : null}
          <Button
            style={styles.next}
            textStyle={styles.textStyle}
            title="Next"
            onClickSignup={handleNextSubmit}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};
export default SignupLevel;
