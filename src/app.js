
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './containers';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers';

import { Provider } from 'react-redux';
//const reducer = (state, actions) => store;

//const store = createStore(reducer, undefined, thunk);


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducer));

export function start() {
  registerScreens(store, Provider);

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'com.example.FilmList',
        label: 'FilmList'
      }
    ]
  });
}
