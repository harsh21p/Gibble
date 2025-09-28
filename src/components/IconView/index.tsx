import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';

type Props = {
  style: any;
  src: string;
};
const IconView = ({ style, src }: Props) => {
  return <View style={[styles.container, style]}></View>;
};
export default IconView;
