import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Reactotron from './App/config/ReactotronConfig';

console.tron = Reactotron;

YellowBox.ignoreWarnings(['AsyncStorage', 'component']);

AppRegistry.registerComponent(appName, () => App);
