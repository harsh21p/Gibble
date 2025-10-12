import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import { EiconDisplay, IMuiIcons } from '../../types'
import EStyleSheet from 'react-native-extended-stylesheet';
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
const MaterialIcons = (props: IMuiIcons) => {
    const { name, size, IconContainerStyle, labelText, labelTextStyle, labelTextContainerStyle, iconVisible = true, display = EiconDisplay.visbile, ...rest } = props;
    if (!iconVisible) {
        return null
    }
    return (
        <View style={[styles.IconContainerStyle, IconContainerStyle]}>
            <Icon name={name} size={size} style={{ ...rest, opacity: display == EiconDisplay.hidden ? 0 : 1 }} {...rest} />
            {labelText ? <View style={labelTextContainerStyle}><Text style={[labelTextStyle, { opacity: display == EiconDisplay.hidden ? 0 : 1 }]}>{labelText}</Text></View> : null}
        </View>
    )
}

const styles = EStyleSheet.create({
    IconContainerStyle: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        padding: 0,
        margin: 0
    }
} as { [key: string]: ExtendedStyle });

export default MaterialIcons