import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Define a custom type that combines standard RN styles with EStyleSheet features
type ExtendedStyle =
  | ViewStyle
  | TextStyle
  | ImageStyle
  | {
      // Add any specific EStyleSheet properties you use, e.g., variables
      $variables?: { [key: string]: any };
      // ... other EStyleSheet specific properties
    };
const styles = EStyleSheet.create({
  keyboardAwareContainerPhoneStyle: {
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
  },
  titlePhone: {
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 16,
    letterSpacing: 0,
    textAlign: 'center',
  },
  label: {
    color: '#979797',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
  },
  labelPhone: {
    color: '$darkText',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  selected: {
    color: '$primaryBgColor',
  },
  lineWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperMain: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    alignSelf: 'center',
  },
  stepperIndividualContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  phoneStepperMain: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '0.5rem',
    paddingVertical: '2rem',
  },
  phoneStepper: {
    backgroundColor: '$primaryBgColor',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 250,
  },
  phoneStepperSecondaryContainer: {
    alignItems: 'center',
    gap: 10,
  },
  stepperTextPhone: {
    color: '$whiteText',
  },
  buttonView: {
    width: '40%',
    paddingRight: '5%',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonViewPhone: {
    paddingHorizontal: '1.3rem',
  },
  next: {
    backgroundColor: '$primaryBgColor',
    height: 40,
    flexGrow: 1,
  },
  buttonStyleOutline: {
    backgroundColor: '$whiteText',
    height: 40,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '$primaryBgColor',
  },
  multipleButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  textStyleOutline: {
    fontSize: 15,
    fontWeight: '500',
    color: '$primaryBgColor',
  },
  middle: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    marginTop: '0%',
    paddingTop: '0%',
  },
  phoneLastRowStyle: {
    flexDirection: 'row',
    gap: 20,
  },
  singleInput: {
    width: '45%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '1.5%',
  },
  input: {
    width: '45%',
  },
  singleInputAge: {
    width: '20%',
  },
  inputMain: {
    height: 40,
    fontSize: 14,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: '$labelTextColor',
  },
  labelStyleTablet: {
    fontSize: 14,
    fontWeight: 500,
    color: '$labelTextColor',
  },
  disabledBgStyle: {
    backgroundColor: '$blurBgColor',
  },
  disabledTextStyle: {
    color: '$disabledTextColor',
  },
  formCompletedStyles: {
    backgroundColor: '$filledBgColor',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  tickMarkStyle: {
    color: '$primaryBgColor',
    fontWeight: '600',
  },
  multiSelectTextStyle: {
    color: '$unSelectColor',
    fontSize: 14,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: '$fadedBorderColor',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
  listStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  selectedMusicalDetailsStyle: {
    borderColor: '$primaryBgColor',
    color: '$primaryBgColor',
  },
  errorTextStyle: {
    color: '$errorTextColor',
    fontSize: 12,
    fontStyle: 'italic',
  },
} as { [key: string]: ExtendedStyle });

export default styles;
