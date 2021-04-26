/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import BirdContainer from './src/containers/BirdContainer';

AppRegistry.registerComponent(appName, () => BirdContainer);
