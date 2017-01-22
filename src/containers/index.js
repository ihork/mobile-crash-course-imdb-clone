import WelcomeScreen from './WelcomeScreen';
import Provider from 'react-redux';
import { Navigation } from 'react-native-navigation';

export function registerScreens(store) {
  Navigation.registerComponent('com.example.WelcomeScreen', () => WelcomeScreen, store, Provider);
}
