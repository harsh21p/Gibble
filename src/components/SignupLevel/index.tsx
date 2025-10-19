import {
  EmitterSubscription,
  Keyboard,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useStringsContext } from '../../context/strings-context';
import DashedDivider from '../DashedDivider';
import Button from '../Button';
import InputText from '../InputText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckIcon from 'react-native-vector-icons/Feather';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../zod';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  musicalDataInstance,
  StaticDataNamespace,
} from '../../constants/staticData';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { handleMusicalDetailsState } from '../../utils/commonFunctions';
import {
  EiconDisplay,
  iMusicalDetailsErrors,
  ImusicClassDetails,
  IpersonalDetailsDropDownVisibility,
} from '../../types';
import MaterialIcons from '../Icons/MaterialIcons';
import {
  handleDropDownVisibility,
  personalDetailsDropDownActionType,
} from '../../routes/Signup/signupService';
import PickerComponent from '../Picker/PickerComponent';
import { classNameRegex, handleNextSubmit } from './SignupLevelService';
import { useDimensionsContext } from '../../context/dimensions';

interface ISignupLevelProps {
  style: any;
  isTablet: boolean;
  onClickNext: () => void;
  dropDownVisibilityState?: IpersonalDetailsDropDownVisibility;
  dispatchDropDownVisibility?: (action: {
    type: personalDetailsDropDownActionType;
    payload: boolean;
  }) => void;
}

const SignupLevel = ({
  style,
  onClickNext,
  isTablet,
  dispatchDropDownVisibility,
  dropDownVisibilityState,
}: ISignupLevelProps) => {
  const { stringsData } = useStringsContext();
  const [selected, setSelected] = useState(1);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [musicalDetails, setMusicalDetails] =
    useState<ImusicClassDetails>(musicalDataInstance);
  const [personalDetailsPicker, setPersonalDetailsPicker] = useState<any>({});
  const [musicalDetailsError, setMusicalDetailsError] =
    useState<iMusicalDetailsErrors>({
      className: { message: 'Please enter your classname', isError: false },
      Instruments: { message: 'Please select your instrument', isError: false },
      Experience: {
        message: 'Please select total years of experience',
        isError: false,
      },
      ModeOfTeaching: {
        message: 'Please select your mode of teaching',
        isError: false,
      },
      Students: {
        message: 'Please select the number of students you have',
        isError: false,
      },
    });
  const { screenDimensions } = useDimensionsContext();
  const { INSTRUMENTS, EXPERIENCE, MODE_OF_TEACHING, STUDENTS } =
    StaticDataNamespace.MusicalDetailsKeys;
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    resetField,
  } = useForm({
    resolver: zodResolver(schema.SignUpSchema),
  });
  const classNameRef = useRef<string>('');
  const insets = useSafeAreaInsets();
  /**
   */
  const renderItems = useCallback(
    (
      { value, isSelected }: { isSelected: boolean; value: string },
      index: number,
      key: StaticDataNamespace.MusicalDetailsKeys,
    ) => {
      return (
        <TouchableOpacity
          key={`${index}-${key}`}
          onPress={() =>
            handleMusicalDetailsState(
              setMusicalDetails,
              setMusicalDetailsError,
              key,
              value,
            )
          }
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

  const pickerRef = useRef<any>(null);
  /**
   *
   * @param index
   * @returns
   */
  const handleStepperrender = (index: number, isTablet?: boolean) => {
    if (isTablet) {
      switch (index) {
        case 1:
          return (
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
                      labelStyle={styles.labelStyleTablet}
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
                      labelStyle={styles.labelStyleTablet}
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
                  render={({ field: { onChange, ...rest } }) => (
                    <InputText
                      {...rest}
                      onChange={text => {
                        onChange(text);
                        resetField('city');
                      }}
                      isError={errors.country}
                      labelStyle={styles.labelStyleTablet}
                      required
                      style={styles.input}
                      styleInput={styles.inputMain}
                      placeholder={'Country'}
                      dropDownContainerStyle={{
                        maxHeight: screenDimensions.screenHeight / 4,
                      }}
                      dropdown
                      dropDownData={StaticDataNamespace.countries}
                      lable={'Country'}
                      getValues={getValues}
                      isDropDownVisible={
                        dropDownVisibilityState?.isCountryDropDownVisible
                      }
                      dropDownRenderItemKey={'name'}
                      setIsDropDownVisible={payload =>
                        handleDropDownVisibility(dispatchDropDownVisibility, {
                          type: 'Country',
                          payload,
                        })
                      }
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
                      labelStyle={styles.labelStyleTablet}
                      required
                      style={styles.input}
                      styleInput={styles.inputMain}
                      placeholder={'City'}
                      dropdown
                      dropDownContainerStyle={{
                        maxHeight: screenDimensions.screenHeight / 4,
                      }}
                      isDropDownVisible={
                        dropDownVisibilityState?.isCityDropDownVisible
                      }
                      setIsDropDownVisible={payload =>
                        handleDropDownVisibility(dispatchDropDownVisibility, {
                          type: 'City',
                          payload,
                        })
                      }
                      getValues={getValues}
                      dropDownData={
                        StaticDataNamespace.CitiesObjectWithCountry[
                          getValues('country')
                        ]
                      }
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
                      labelStyle={styles.labelStyleTablet}
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
                  name="age"
                  control={control}
                  render={({ field: { onChange, ...rest } }) => {
                    return (
                      <PickerComponent
                        {...rest}
                        isError={errors.age}
                        styleInput={styles.inputMain}
                        labelStyle={styles.labelStyleTablet}
                        style={styles.singleInputAge}
                        selectedValue={personalDetailsPicker?.age}
                        onValueChange={(value: any) => {
                          onChange(+value);
                          setPersonalDetailsPicker((prev: any) => ({
                            ...prev,
                            age: value,
                          }));
                        }}
                        placeholder={'26'}
                        labelText={'Age'}
                        isRequired={true}
                        pickerStyles={{
                          inputIOSContainer: {
                            zIndex: 100,
                            borderBottomWidth: 1,
                            backgroundColor: errors.age?.message
                              ? '#ffe1e1ff'
                              : 'rgba(108, 132, 157, 0.12)',
                            borderColor: errors.age?.message
                              ? '#d57272ff'
                              : '#ccc',
                          },
                        }}
                        pickerData={[...new Array(100)].map((i, j) => ({
                          label: `${j + 1}`,
                          value: `${j + 1}`,
                        }))}
                      />
                    );
                  }}
                />
              </View>
            </View>
          );
      }
    }
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
                    dropDownContainerStyle={{
                      maxHeight: screenDimensions.screenHeight / 4,
                    }}
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
                    dropDownContainerStyle={{
                      maxHeight: screenDimensions.screenHeight / 4,
                    }}
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
                    isDropDownVisible={
                      dropDownVisibilityState?.isAgeDropDownVisible
                    }
                    setIsDropDownVisible={value =>
                      handleDropDownVisibility(dispatchDropDownVisibility, {
                        type: 'Age',
                        payload: value,
                      })
                    }
                    dropDownData={[...new Array(100)].map((i, j) => `${j + 1}`)}
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
                isError={
                  musicalDetailsError?.className.isError
                    ? musicalDetailsError?.className
                    : { message: '' }
                }
                labelStyle={styles.labelStyle}
                onChange={text => {
                  if (
                    musicalDetailsError?.className.isError &&
                    classNameRegex.test(text)
                  ) {
                    setMusicalDetailsError((prev: any) => ({
                      ...prev,
                      className: { isError: false },
                    }));
                  }
                  classNameRef.current = text;
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
                  {musicalDetails.Instruments.map((item, index) =>
                    renderItems(item, index, INSTRUMENTS),
                  )}
                </View>
                <MaterialIcons
                  display={
                    musicalDetailsError?.Instruments?.isError
                      ? EiconDisplay.visbile
                      : EiconDisplay.hidden
                  }
                  color={EStyleSheet.value('$errorTextColor')}
                  name="info-outline"
                  labelText={musicalDetailsError?.Instruments?.message}
                  labelTextStyle={[styles.errorTextStyle]}
                />
              </View>
            </View>
            {/* Row 3 */}
            <View style={{ gap: 15 }}>
              <Text style={styles.labelStyle}>Total years of experience</Text>
              <View style={{ gap: 3 }}>
                <View style={styles.listStyle}>
                  {musicalDetails.Experience.map((item, index) =>
                    renderItems(item, index, EXPERIENCE),
                  )}
                </View>
                <MaterialIcons
                  display={
                    musicalDetailsError?.Experience?.isError
                      ? EiconDisplay.visbile
                      : EiconDisplay.hidden
                  }
                  color={EStyleSheet.value('$errorTextColor')}
                  name="info-outline"
                  labelText={musicalDetailsError?.Experience?.message}
                  labelTextStyle={styles.errorTextStyle}
                />
              </View>
            </View>
            <View style={{ gap: 15 }}>
              <Text style={styles.labelStyle}>
                How many students do you currently have?
              </Text>
              <View style={{ gap: 3 }}>
                <View style={styles.listStyle}>
                  {musicalDetails.Students.map((item, index) =>
                    renderItems(item, index, STUDENTS),
                  )}
                </View>
                <MaterialIcons
                  display={
                    musicalDetailsError?.Students?.isError
                      ? EiconDisplay.visbile
                      : EiconDisplay.hidden
                  }
                  color={EStyleSheet.value('$errorTextColor')}
                  name="info-outline"
                  labelText={musicalDetailsError?.Students?.message}
                  labelTextStyle={styles.errorTextStyle}
                />
              </View>
            </View>
            <View style={{ gap: 15 }}>
              <Text style={styles.labelStyle}>Mode of teaching</Text>
              <View style={{ gap: 3 }}>
                <View style={styles.listStyle}>
                  {musicalDetails.ModeOfTeaching.map((item, index) =>
                    renderItems(item, index, MODE_OF_TEACHING),
                  )}
                </View>
                <MaterialIcons
                  display={
                    musicalDetailsError?.ModeOfTeaching?.isError
                      ? EiconDisplay.visbile
                      : EiconDisplay.hidden
                  }
                  color={EStyleSheet.value('$errorTextColor')}
                  name="info-outline"
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
          <View style={styles.stepperIndividualContainer}>
            {selected > 1 ? (
              <CheckIcon
                name="check-circle"
                size={20}
                color={EStyleSheet.value('$successColor')}
              />
            ) : null}
            <Text style={[styles.label, selected >= 1 && styles.selected]}>
              {stringsData?.signup?.step1}
            </Text>
          </View>

          <DashedDivider
            style={styles.line}
            strokeDasharray={selected > 1 ? [0, 0] : [4, 4]}
            color={EStyleSheet.value(
              selected > 1 ? '$primaryBgColor' : '$disabledTextColor',
            )}
          />
          <View style={styles.stepperIndividualContainer}>
            {selected > 2 ? (
              <CheckIcon
                size={20}
                name="check-circle"
                color={EStyleSheet.value('$successColor')}
              />
            ) : null}

            <Text style={[styles.label, selected >= 2 && styles.selected]}>
              {stringsData?.signup?.step2}
            </Text>
          </View>
          <DashedDivider
            style={styles.line}
            strokeDasharray={selected > 2 ? [0, 0] : [4, 4]}
          />
          <View style={styles.stepperIndividualContainer}>
            {selected > 3 ? (
              <CheckIcon
                size={20}
                name="check-circle"
                color={EStyleSheet.value('$successColor')}
              />
            ) : null}
            <Text style={[styles.label, selected == 3 && styles.selected]}>
              {stringsData?.signup?.step3}
            </Text>
          </View>
        </View>
        {handleStepperrender(selected, true)}

        <View style={styles.buttonView}>
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
            onClickSignup={() =>
              handleNextSubmit(
                selected,
                handleSubmit,
                setSelected,
                musicalDetails,
                classNameRef,
                setMusicalDetailsError,
                onClickNext,
              )
            }
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
