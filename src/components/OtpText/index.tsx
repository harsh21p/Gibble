import { Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';

type Props = {
  lable: string;
  placeholder: string;
  style: any;
  required?: boolean;
  inputs?: number;
  error?: string;
};
const OtpText = ({
  lable,
  placeholder,
  style,
  required = false,
  inputs = 1,
  error,
}: Props) => {
  const [text, setText] = useState('');

  const handleChangeText = (input: string) => {
    setText(input);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>
        {lable}
        {required && <Text style={styles.red}>{' *'}</Text>}
      </Text>
      <View style={styles.inputContainer}>
        {[...Array(inputs)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={text}
            onChangeText={handleChangeText}
            placeholder={placeholder}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      {error && <Text style={[styles.msg]}>{error}</Text>}
    </View>
  );
};
export default OtpText;
