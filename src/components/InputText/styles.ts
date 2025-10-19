import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
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
  container: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#333',
    paddingBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'rgba(108, 132, 157, 0.12)',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  success: {
    color: 'green',
    fontSize: 12,
    marginTop: 4,
  },
  red: {
    color: 'red',
  },
  dropdownMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lcon: {
    position: 'absolute',
    right: 10,
  },
  dropDownContainerStyle: {
    position: 'absolute',
    backgroundColor: '$dropDownBgColor',
    zIndex: 100,
    top: '110%',
    maxHeight: Dimensions.get('screen').height / 4,
    width: '100%',
    opacity: 10,
    borderRadius: 3,
    padding: 5,
  },
  dropDownContentContainerStyle: {
    padding: 10,
  },
  dropDownTextStyle: {
    padding: 3,
    fontSize: 14,
  },
} as { [key: string]: ExtendedStyle });

export default styles;
