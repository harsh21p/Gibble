import {Platform} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';

const Android = 'android' as const;
const IOS = 'ios' as const;

const isAndroid = Platform.OS === Android;
const version = isAndroid
  ? Platform.Version
  : parseInt(Platform.Version as string, 10);

const isTablet = Platform.OS === 'ios' && Platform.isPad;

const statusBarHeight = isAndroid
  ? getStatusBarHeight()
  : getStatusBarHeight(isIphoneX());

export default {
  Android,
  IOS,
  isAndroid,
  isIOS: !isAndroid,
  isTablet,
  statusBarHeight,
  version,
};
