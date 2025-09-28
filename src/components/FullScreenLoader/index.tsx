import React, { JSX } from 'react';
import {ViewStyle, View, ActivityIndicator} from 'react-native';
import styles from './styles';

interface Props {
  customStyle?: ViewStyle;
}

const FullScreenLoader = ({customStyle}: Props): JSX.Element => {
  return (
    <View style={[styles.LoadingContainer, customStyle]}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default FullScreenLoader;
