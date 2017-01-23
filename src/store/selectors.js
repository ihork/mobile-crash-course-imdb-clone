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

export function areFilmsLoading(state) {
    return state.films.filmsAreLoading;
}

export function getCurrentPage(state) {
    return state.films.currentPage;
}

export function getNextPage(state) {
    return state.films.currentPage + 1;
}

export function getSearchQuery(state) {
    return state.films.searchQuery;
}

export function getFilmById(state, id) {
    return state.films.filmById[id];
}