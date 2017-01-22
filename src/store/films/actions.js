import filmsDb from '../../services/FilmsDbService';
import * as types from './actionTypes';

export function getFilmsData() {
    return async (dispatch, getState) => {
        const data = await filmsDb.getFilmsData();
        dispatch({type: types.FILMS_LOAD_SUCCESS, items: data.results});
    };
}