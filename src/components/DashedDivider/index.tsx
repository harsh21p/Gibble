import { ColorValue, View, ViewStyle } from 'react-native';
import Svg, { Line, NumberProp } from 'react-native-svg';

const DashedDivider = ({ style, strokeDasharray, color }: {
  style: ViewStyle,
  strokeDasharray?: ReadonlyArray<NumberProp> | NumberProp;
  color?: ColorValue

}) => (
  <View style={style}>
    <Svg height="1" width="80%">
      <Line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke={color ?? "#979797"}
        strokeWidth="1"
        strokeDasharray={strokeDasharray} // dashes
      />
    </Svg>
  </View>
);
export default DashedDivider;
