import {
  FocusEvent,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, { RefObject, useCallback, useEffect, useState } from 'react';
import styles from './styles';
import Svg, { Path } from 'react-native-svg';
import {
  ErrorOption,
  FieldError,
  RefCallBack,
} from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';

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
  placeholderTextColor?: string;
  dropDownData?: Array<any>;
  dropDownRenderItemKey?: string;
  isDropDownVisible?: boolean;
  setIsDropDownVisible?(value: boolean): void;
  getValues?: <T>(key: T) => any;
  dropDownContainerStyle?: ViewStyle;
  dropDownContentContainerStyle?: StyleProp<ViewStyle>;
  dropDownStyle?: StyleProp<ViewStyle> | undefined;
  dropDownTextStyle?: TextStyle
};
const InputText = (props: Props) => {

  const {
    lable,
    placeholder,
    style,
    required = false,
    styleInput = {},
    labelStyle = {},
    dropdown = false,
    isError,
    placeholderTextColor,
    dropDownData,
    dropDownRenderItemKey,
    setIsDropDownVisible,
    isDropDownVisible,
    dropDownContainerStyle,
    dropDownContentContainerStyle,
    dropDownStyle,
    dropDownTextStyle,
    ...rest
  } = props;
  const handleDropDownPress = useCallback(() => {
    if (dropdown) {
      setIsDropDownVisible && setIsDropDownVisible(!isDropDownVisible);
    }
  }, [isDropDownVisible]);
  const [filteredDropDownData, setFilteredDropDownData] =
    useState<Array<any>>();
  const handleChangeText = useCallback(
    (text: any, dropDown: boolean = true) => {
      if (dropdown) {
        if (text) {
          let temp = dropDownData?.filter(item => {
            let result = dropDownRenderItemKey
              ? item[dropDownRenderItemKey].includes(text) ||
              item[dropDownRenderItemKey].startsWith(text)
              : item?.includes(text) || item?.startsWith(text);
            return result;
          });
          // console.log(temp);
          setIsDropDownVisible && setIsDropDownVisible(dropDown);
          setFilteredDropDownData(temp!);
        } else {
          setFilteredDropDownData(dropDownData!);
          setIsDropDownVisible && setIsDropDownVisible(false);
        }
      }
      rest.onChange && rest.onChange(text);
    },
    [filteredDropDownData],
  );
  useEffect(() => {
    setFilteredDropDownData(dropDownData ?? []);
  }, [dropDownData?.length]);
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
          onPress={handleDropDownPress}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor ?? 'gray'}
        />
        {dropdown && (
          <Svg
            style={styles.lcon}
            width={11}
            height={7}
            viewBox="0 0 8 4"
            fill="none"
            onPress={handleDropDownPress}
          >
            <Path
              d="M4.00049 3.66602L0.666504 0.332031H7.3335L4.00049 3.66602Z"
              fill="#768EA7"
            />
          </Svg>
        )}

        {isDropDownVisible && filteredDropDownData?.length ? (
          <View style={[styles.dropDownContainerStyle, dropDownContainerStyle]}>
            {/* <FlatList
                initialNumToRender={10}
                nestedScrollEnabled={true}
                windowSize={3}
                data={dropDownData}
                renderItem={({ item, index }) => {
                  return (
                    <Text
                      onPress={() => {
                        rest.onChange && rest.onChange(item);
                        setIsDropDownVisible && setIsDropDownVisible(false);
                      }}
                    >
                      {dropDownRenderItemKey
                        ? item[dropDownRenderItemKey]
                        : item}
                    </Text>
                  );
                }}
              /> */}
            <ScrollView
              nestedScrollEnabled
              style={[styles.dropDownStyle, dropDownStyle]}
              contentContainerStyle={[styles.dropDownContentContainerStyle, dropDownContentContainerStyle]}
            >
              {filteredDropDownData.map((item, index) => {
                let value: string =
                  rest.getValues && rest.getValues(rest.name?.toLowerCase());
                let key: string = dropDownRenderItemKey
                  ? item[dropDownRenderItemKey]
                  : item;
                let startIndex = key
                  ?.toLowerCase()
                  .indexOf(value?.toLowerCase());
                return value ? (
                  <Text
                    key={`${key}-${index}`}
                    style={[styles.dropDownTextStyle,dropDownTextStyle ]}
                    onPress={() => {
                      handleChangeText(
                        dropDownRenderItemKey
                          ? item[dropDownRenderItemKey]
                          : item,
                        false,
                      );
                    }}
                  >
                    {key.slice(0, startIndex)}
                    <Text style={{ color: 'red' }}>
                      {key.slice(startIndex, startIndex + value.length)}
                    </Text>
                    {key.slice(startIndex + value.length)}
                  </Text>
                ) : (
                  <Text
                    key={`${key}-${index}`}
                    style={[styles.dropDownTextStyle,dropDownTextStyle ]}
                    onPress={() => {
                      handleChangeText(
                        dropDownRenderItemKey
                          ? item[dropDownRenderItemKey]
                          : item,
                        false,
                      );
                    }}
                  >
                    {dropDownRenderItemKey ? item[dropDownRenderItemKey] : item}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default InputText;
