/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainContainer from './src/containers/MainContainer';

AppRegistry.registerComponent(appName, () => MainContainer);
