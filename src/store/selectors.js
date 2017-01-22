import _ from 'lodash';

export function getFilmMap(state) {
    return state.films.filmById;
}

export function getFilmIdList(state) {
    return state.films.filmIdList;
}

export function getFilmList(state) {
    return _.map(getFilmIdList(state), (id) => {
        return getFilmMap(state)[id];
    });
}