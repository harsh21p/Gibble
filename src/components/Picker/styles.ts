import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PickerStyle } from 'react-native-picker-select';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

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
export const pickerSelectStyles: PickerStyle = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    width: 100,
    height: 36,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'rgba(108, 132, 157, 0.12)',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
  inputIOSContainer: {
    zIndex: 100,
    borderBottomWidth: 1,
  },
  placeholder: {
    paddingVertical: 12,
    width: 100,
    height: 36,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'gray',
    backgroundColor: 'rgba(108, 132, 157, 0.12)',
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export const pickerComponentStyles = EStyleSheet.create({
  requiredStyles: {
    color: '$errorTextColor',
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 500,
    color: '$labelTextColor',
    paddingBottom: ".5rem"
  },
} as { [key: string]: ExtendedStyle });
