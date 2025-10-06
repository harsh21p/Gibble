import React, { Pressable, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({
  title,
  onClickSignup,
  style = {},
  textStyle = {},
}: {
  title: string;
  onClickSignup: Function;
  style?: any;
  textStyle?: any;
}) => {
  return (
    <TouchableOpacity onPress={() => onClickSignup()} style={[styles.button, style]}>
      <Text style={[styles.btntext, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
