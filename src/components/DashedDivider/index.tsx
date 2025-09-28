import React, { View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const DashedDivider = ({ style }: any) => (
  <View style={style}>
    <Svg height="1" width="80%">
      <Line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke="#979797"
        strokeWidth="1"
        strokeDasharray={[4, 4]} // dashes
      />
    </Svg>
  </View>
);
export default DashedDivider;
