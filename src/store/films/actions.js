import filmsDb from '../../services/FilmsDbService';
import * as types from './actionTypes';
import * as selectors from '../selectors';

export function getFilmsData() {
    return async (dispatch, getState) => {
        dispatch({type: types.FILMS_ARE_LOADING});
        const data = await filmsDb.getFilmsData(selectors.getNextPage(getState()));
        dispatch({type: types.FILMS_LOAD_SUCCESS, items: data.results, page: data.page});
    };
}