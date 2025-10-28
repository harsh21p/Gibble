import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  Button,
  StyleSheet,
} from 'react-native';
import React, { RefObject } from 'react';
import { ErrorOption, FieldError, RefCallBack } from 'react-hook-form';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import Svg, { Path } from 'react-native-svg';
import { pickerComponentStyles, pickerSelectStyles } from './styles';
interface IPickerProps {
  placeholder: string;
  style: ViewStyle;
  styleInput?: TextStyle;
  required?: boolean;
  labelStyle?: TextStyle;
  isError: FieldError | undefined | ErrorOption;
  name?: string;
  ref?: RefCallBack | RefObject<any>;
  selectedValue: any;
  onValueChange: any;
  pickerData: any;
  pickerStyles?: PickerStyle;
  labelText?: string;
  isRequired?: boolean;
}
const PickerComponent = (props: IPickerProps) => {
  const {
    selectedValue,
    onValueChange,
    pickerData,
    pickerStyles,
    labelText,
    labelStyle,
    isRequired,
    isError
  } = props;
  return (
    <View>
      {labelText ? (
        <Text style={[labelStyle, pickerComponentStyles.labelStyle]}>
          {`${labelText}`}
          {isRequired ? (
            <Text style={pickerComponentStyles.requiredStyles}>{' *'}</Text>
          ) : null}
        </Text>
      ) : null}
      <RNPickerSelect
        {...props}
        placeholder={{ label: 'Age' }}
        value={selectedValue}
        onValueChange={value => onValueChange(value)}
        items={pickerData}
        style={{
          ...pickerSelectStyles,
          ...pickerStyles,
        }}
        Icon={() => (
          <View style={{}}>
            <Svg style={{}} width={11} height={7} viewBox="0 0 8 4" fill="none">
              <Path
                d="M4.00049 3.66602L0.666504 0.332031H7.3335L4.00049 3.66602Z"
                fill="#768EA7"
              />
            </Svg>
          </View>
        )}
      />
    </View>
  );
};
export default PickerComponent;
