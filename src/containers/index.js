import { Navigation } from 'react-native-navigation';
import FilmList from './FilmList';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('com.example.FilmList', () => FilmList, store, Provider);
}
