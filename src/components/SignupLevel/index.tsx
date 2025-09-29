import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Text } from 'react-native-gesture-handler';
import { useStringsContext } from '../../context/strings-context';
import Svg, { Line } from 'react-native-svg';
import DashedDivider from '../DashedDivider';
import Button from '../Button';
import InputText from '../InputText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  style: any;
  onClickNext?: Function;
};
const SignupLevel = ({ style, onClickNext }: Props) => {
  const { stringsData } = useStringsContext();
  const [selected, setSelected] = useState(1);
  return (
    <KeyboardAwareScrollView>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{stringsData?.signup?.main}</Text>
        {/* stepper */}
        <View style={styles.stepperMain}>
          <Text
            onPress={() => {
              setSelected(1);
            }}
            style={[styles.label, selected == 1 && styles.selected]}
          >
            {stringsData?.signup?.step1}
          </Text>
          <DashedDivider style={styles.line} />
          <Text
            onPress={() => {
              setSelected(2);
            }}
            style={[styles.label, selected == 2 && styles.selected]}
          >
            {stringsData?.signup?.step2}
          </Text>
          <DashedDivider style={styles.line} />
          <Text
            onPress={() => {
              setSelected(3);
            }}
            style={[styles.label, selected == 3 && styles.selected]}
          >
            {stringsData?.signup?.step3}
          </Text>
        </View>
        <View style={styles.middle}>
          {/* Row 1 */}
          <View style={styles.row}>
            <InputText
              stylelable={styles.stylelable}
              required
              style={styles.input}
              styleInput={styles.inputMain}
              placeholder={'First Name'}
              lable={'First Name'}
            />
            <InputText
              stylelable={styles.stylelable}
              required
              style={styles.input}
              styleInput={styles.inputMain}
              placeholder={'Last Name'}
              lable={'Last Name'}
            />
          </View>

          {/* Row 2 */}
          <View style={styles.row}>
            <InputText
              stylelable={styles.stylelable}
              required
              style={styles.input}
              styleInput={styles.inputMain}
              placeholder={'Country'}
              dropdown
              lable={'Country'}
            />
            <InputText
              stylelable={styles.stylelable}
              required
              style={styles.input}
              styleInput={styles.inputMain}
              placeholder={'City'}
              dropdown
              lable={'City'}
            />
          </View>

          {/* Row 3 */}
          <View style={styles.row}>
            <InputText
              styleInput={styles.inputMain}
              style={styles.singleInput}
              stylelable={styles.stylelable}
              placeholder={'Pin Code'}
              lable={'Pin Code'}
              required
            />
          </View>

          {/* Row 4 */}
          <View style={styles.row}>
            <InputText
              styleInput={styles.inputMain}
              stylelable={styles.stylelable}
              style={styles.singleInputAge}
              placeholder={'26'}
              lable={'Age'}
              dropdown
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <Button
            style={styles.next}
            textStyle={styles.textStyle}
            title="Next"
            onClickSignup={() => onClickNext}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignupLevel;
