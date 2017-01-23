import filmsDb from '../../services/FilmsDbService';
import * as types from './actionTypes';
import * as selectors from '../selectors';

export function getFilmsData(query) {
    return async (dispatch, getState) => {
        let page = selectors.getNextPage(getState());
        if (selectors.getSearchQuery(getState()) !== query) {
            dispatch({type: types.SEARCH_QUERY, query});
            page = 1;
        }
        dispatch({type: types.FILMS_ARE_LOADING});
        const data = await filmsDb.getFilmsData(page, query);
        dispatch({type: types.FILMS_LOAD_SUCCESS, items: data.results, page: data.page});
    };
}