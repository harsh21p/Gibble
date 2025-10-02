import { Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { isTablet } from 'react-native-device-info';

// Define a custom type that combines standard RN styles with EStyleSheet features
type ExtendedStyle = ViewStyle | TextStyle | ImageStyle | {
  // Add any specific EStyleSheet properties you use, e.g., variables
  $variables?: { [key: string]: any };
  // ... other EStyleSheet specific properties
};
const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneContainer: {
    padding: "2rem",
    flex: 1,
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    color: '#666666',
    lineHeight: 54,
    fontStyle: 'italic',
    marginBottom: '1%'
  },

  logo: {
    width: '30%',
    height: '20%',
    alignContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    width: isTablet() ? '25%' : "100%",
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '5%',
  },
  btntext: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  }
} as { [key: string]: ExtendedStyle });

export default styles;
