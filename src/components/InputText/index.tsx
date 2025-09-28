import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Svg, { Path } from 'react-native-svg';

type Props = {
  lable: string;
  placeholder: string;
  style: any;
  styleInput?: any;
  required?: boolean;
  stylelable?: any;
  dropdown?: boolean;
};
const InputText = ({
  lable,
  placeholder,
  style,
  required = false,
  styleInput = {},
  stylelable = {},
  dropdown = false,
}: Props) => {
  const [text, setText] = useState('');

  const handleChangeText = (input: string) => {
    setText(input);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, stylelable]}>
        {lable}
        {required && <Text style={styles.red}>{' *'}</Text>}
      </Text>
      <View style={styles.dropdownMain}>
        <TextInput
          style={[styles.input, styleInput]}
          value={text}
          onChangeText={handleChangeText}
          placeholder={placeholder}
        />
        {dropdown && (
          <Svg
            style={styles.lcon}
            width={11}
            height={7}
            viewBox="0 0 8 4"
            fill="none"
          >
            <Path
              d="M4.00049 3.66602L0.666504 0.332031H7.3335L4.00049 3.66602Z"
              fill="#768EA7"
            />
          </Svg>
        )}
      </View>
    </View>
  );
};
export default InputText;
