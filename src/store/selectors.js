import _ from 'lodash';

export function getFilms(state) {
    return state.films.filmById;
}

export function getFilmIdList(state) {
    return state.films.filmIdList;
}

export function getFilmList(state) {
    return _.map(state.films.filmIdList, (id) => {
        return state.films.filmById[id];
    });
}