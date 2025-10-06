import {
  Alert,
  FocusEvent,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, { RefObject, useEffect, useState } from 'react';
import styles from './styles';
import Svg, { Path } from 'react-native-svg';
import {
  ErrorOption,
  FieldError,
  FieldValues,
  RefCallBack,
  RegisterOptions,
  useForm,
} from 'react-hook-form';

type Props = {
  lable: string;
  placeholder: string;
  style: ViewStyle;
  styleInput?: TextStyle;
  required?: boolean;
  labelStyle?: any;
  dropdown?: boolean;
  isError: FieldError | undefined | ErrorOption;
  name?: string;
  ref?: RefCallBack | RefObject<any>;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: any) => void;
};
const InputText = (props: Props) => {
  const [text, setText] = useState('');

  const handleChangeText = (input: string) => {
    setText(input);
  };
  const {
    lable,
    placeholder,
    style,
    required = false,
    styleInput = {},
    labelStyle = {},
    dropdown = false,
    isError,
    ...rest
  } = props;
  return (
    <View style={[style ?? styles.container]}>
      <Text style={[styles.label, labelStyle]}>
        {lable}
        {required && <Text style={styles.red}>{' *'}</Text>}
      </Text>
      <View style={styles.dropdownMain}>
        <TextInput
          {...rest}
          style={[
            styles.input,
            styleInput,
            isError?.message && {
              backgroundColor: '#f8e2e2',
              borderColor: '#d28282ff',
            },
          ]}
          onBlur={rest.onBlur}
          onChangeText={rest.onChange}
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
