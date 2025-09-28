/* istanbul ignore file */
/** Common Functions used in entire application */
import {Dimensions, PixelRatio} from 'react-native';
import parser from 'fast-xml-parser';

// Retrieve initial screen's width
const {height, width} = Dimensions.get('window');
export const wp = (widthPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const jsonConverter = response => {
  const options = {
    parseTrueNumberOnly: true,
  };
  const jsonObj = parser.parse(response, options);
  return jsonObj;
};

export const hp = (heightPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

