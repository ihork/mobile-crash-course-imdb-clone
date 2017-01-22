
import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    filmById: {},
    filmIdList: []
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.FILMS_LOAD_SUCCESS:
            return state.merge({
                filmById: extendFilmMapWithItems(state.filmById, action.items),
                filmIdList: fillFilmIdList(state.filmIdList, action.items)
            });
        default: return state;
    }
}


function extendFilmMapWithItems(filmsMap = {}, newItems = []) {
    const newFilmsMap = Object.assign({}, filmsMap);

    newItems.forEach((item) => {
        newFilmsMap[item.id] = item;
    });

    return newFilmsMap;
}

function fillFilmIdList(filmIdList = [], newItems = []) {
    const newFilmIdList = [...filmIdList];

    _.forEach(newItems, (item) => {
        const id = item.id;
        if (!_.includes(filmIdList, id)) {
            newFilmIdList.push(id);
        }
    });

    return newFilmIdList;
}