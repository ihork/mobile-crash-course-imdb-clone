import { Navigation } from 'react-native-navigation';
import FilmList from './FilmList';
import FilmDetails from './FilmDetails';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('com.example.FilmList', () => FilmList, store, Provider);
  Navigation.registerComponent('com.example.FilmDetails', () => FilmDetails, store, Provider);
}
