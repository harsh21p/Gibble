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
    flex: 1,
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
  phoneStepperMain: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '0.5rem',
    paddingVertical: '2rem',
  },
  phoneStepper: {
    backgroundColor: '$primaryBgColor',
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    width: '100%',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: '5%',
    marginTop: 20,
  },
  buttonViewPhone: {
    paddingHorizontal: '1.1rem',
  },
  next: {
    paddingHorizontal: 70,
    backgroundColor: '$primaryBgColor',
    height: 40,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
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
  stylelable: {
    fontSize: 14,
  },
} as { [key: string]: ExtendedStyle });

export default styles;
