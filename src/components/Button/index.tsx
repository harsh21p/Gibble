import React, { Pressable, Text } from 'react-native';
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
    <Pressable onPress={() => onClickSignup()} style={[styles.button, style]}>
      <Text style={[styles.btntext, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
