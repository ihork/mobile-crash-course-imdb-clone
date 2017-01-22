
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    filmsById: {}
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.FILMS_LOAD_SUCCESS:
            return state.merge({
                filmsById: extendFilmsMapWithItems(state.filmsById, action.items)
            });
        default: return state;
    }
}


function extendFilmsMapWithItems(filmsMap = {}, newItems = []) {
    const newFilmsMap = Object.assign({}, filmsMap);

    newItems.forEach((item) => {
        newFilmsMap[item.id] = item;
    });

    return newFilmsMap;
}