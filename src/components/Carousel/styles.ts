import { Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { isTablet } from 'react-native-device-info';

// Define a custom type that combines standard RN styles with EStyleSheet features
type ExtendedStyle = ViewStyle | TextStyle | ImageStyle | {
    // Add any specific EStyleSheet properties you use, e.g., variables
    $variables?: { [key: string]: any };
    // ... other EStyleSheet specific properties
};
const carouselStyles = EStyleSheet.create({
    defaultDotStyle: {
        backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 5
    },
    activeDotStyle:{
        backgroundColor: '#006FFD' 
    }
} as { [key: string]: ExtendedStyle });
export default carouselStyles;