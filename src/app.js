
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './containers';

import { createStore } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, actions) => store;

const store = createStore(reducer, undefined, thunk);

export function start() {
  registerScreens(store);

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'com.example.WelcomeScreen',
        label: 'Welcome'
      }
    ]
  });
}
