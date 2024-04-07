/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import StackRoute from './src/routes/stack';
import BottomTab from './src/routes/bottomTab';
import App from './App';
import Routes from './src/routes/Routes';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const Appss = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Appss);
