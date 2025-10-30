/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { LogBox } from 'react-native';
import { DimensionsContextProvider } from './src/context/dimensions';
LogBox.ignoreAllLogs(true);
const ReduxApp = () => (
  <Provider store={store}>
    <DimensionsContextProvider>
      <App />
    </DimensionsContextProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
