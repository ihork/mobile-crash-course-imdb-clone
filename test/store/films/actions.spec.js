import {ActionTest} from 'redux-testkit';
import mockFilmsDbService from '../../services/filmsDbService.mock';
import * as actionTypes from '../../../src/store/films/actionTypes';

describe('getFilmsData', () => {
    let actions;
    let actionTest = new ActionTest();

    beforeEach(() => {
        mockFilmsDbService.reset();
        actionTest.reset();
        jest.setMock('../../../src/services/FilmsDbService', mockFilmsDbService);
        actions = require('../../../src/store/films/actions');
    });

    describe('when app starts', () => {
        const results = ['film1', 'film2'];
        const page = 1;

        beforeEach(() => {
            mockFilmsDbService.addFilmsDataReturn({
                results,
                page
            });
            actionTest.setState({
                films: {
                    filmById: {},
                    filmIdList: [],
                    currentPage: 0,
                    filmsAreLoading: false
                }
            });
            actionTest.dispatchSync(actions.getFilmsData());
        });

        it('should call getFilmsData method from FilmsDbService', () => {
            expect(mockFilmsDbService.getFilmsData).toHaveBeenCalledTimes(1);
        });

        it('should call getFilmsData method from FilmsDbService for first page', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][0]).toBe(1);
            console.log(actionTest.getDispatched(1));
        });

        it('should dispatch FILMS_ARE_LOADING action', () => {
            expect(actionTest.getDispatched(0).action.type).toBe(actionTypes.FILMS_ARE_LOADING);
        });

        it('should dispatch FILMS_LOAD_SUCCESS action with items array which FilmsDbService returns and page number 1', () => {
            expect(actionTest.getDispatched(1).action.type).toBe(actionTypes.FILMS_LOAD_SUCCESS);
            expect(actionTest.getDispatched(1).action.items).toBe(results);
            expect(actionTest.getDispatched(1).action.page).toBe(1);
        });

    });

    describe('when app contains page 1 loaded', () => {
        const results = ['film1', 'film2'];
        const page = 2;

        beforeEach(() => {
            mockFilmsDbService.addFilmsDataReturn({
                results,
                page
            });
            actionTest.setState({
                films: {
                    filmById: {},
                    filmIdList: [],
                    currentPage: 1,
                    filmsAreLoading: false
                }
            });
            actionTest.dispatchSync(actions.getFilmsData());
        });

        it('should call getFilmsData method from FilmsDbService for second page', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][0]).toBe(2);
        });

        it('should dispatch FILMS_LOAD_SUCCESS action with items array which FilmsDbService returns and page number 2', () => {
            expect(actionTest.getDispatched(1).action.type).toBe(actionTypes.FILMS_LOAD_SUCCESS);
            expect(actionTest.getDispatched(1).action.items).toBe(results);
            expect(actionTest.getDispatched(1).action.page).toBe(2);
        });

    });



    describe('when search query is "test" and store doesn\'t contain this query', () => {
        const results = ['film1', 'film2'];
        const page = 1;

        beforeEach(() => {
            mockFilmsDbService.addFilmsDataReturn({
                results,
                page
            });
            actionTest.setState({
                films: {
                    filmById: {},
                    filmIdList: [],
                    currentPage: 0,
                    filmsAreLoading: false
                }
            });
            actionTest.dispatchSync(actions.getFilmsData('test'));
        });

        it('should call getFilmsData method from FilmsDbService for first page', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][0]).toBe(1);
        });

        it('should call getFilmsData method from FilmsDbService for search query "test"', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][1]).toBe('test');
        });

        it('should dispatch SEARCH_QUERY action with query "test"', () => {
            expect(actionTest.getDispatched(0).action.type).toBe(actionTypes.SEARCH_QUERY);
            expect(actionTest.getDispatched(0).action.query).toBe('test');
        });

        it('should dispatch FILMS_ARE_LOADING action', () => {
            expect(actionTest.getDispatched(1).action.type).toBe(actionTypes.FILMS_ARE_LOADING);
        });

        it('should dispatch FILMS_LOAD_SUCCESS action with items array which FilmsDbService returns and page number 1', () => {
            expect(actionTest.getDispatched(2).action.type).toBe(actionTypes.FILMS_LOAD_SUCCESS);
            expect(actionTest.getDispatched(2).action.items).toBe(results);
            expect(actionTest.getDispatched(2).action.page).toBe(1);
        });

    });

    describe('when app contains page 1 loaded and search query "test" and store contains this query', () => {
        const results = ['film1', 'film2'];
        const page = 2;

        beforeEach(() => {
            mockFilmsDbService.addFilmsDataReturn({
                results,
                page
            });
            actionTest.setState({
                films: {
                    filmById: {},
                    filmIdList: [],
                    currentPage: 1,
                    filmsAreLoading: false,
                    searchQuery: "test"
                }
            });
            actionTest.dispatchSync(actions.getFilmsData('test'));
        });

        it('should call getFilmsData method from FilmsDbService for second page', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][0]).toBe(2);
        });

        it('should call getFilmsData method from FilmsDbService for search query "test"', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][1]).toBe('test');
        });

        it('should not dispatch SEARCH_QUERY action with query "test"', () => {
            expect(actionTest.getDispatched(0).action.type).not.toBe(actionTypes.SEARCH_QUERY);
        });

        it('should dispatch FILMS_LOAD_SUCCESS action with items array which FilmsDbService returns and page number 2', () => {
            expect(actionTest.getDispatched(1).action.type).toBe(actionTypes.FILMS_LOAD_SUCCESS);
            expect(actionTest.getDispatched(1).action.items).toBe(results);
            expect(actionTest.getDispatched(1).action.page).toBe(2);
        });

    });



    describe('when app contains page 1 loaded and search query "test2" and store contains query "test"', () => {
        const results = ['film1', 'film2'];
        const page = 1;

        beforeEach(() => {
            mockFilmsDbService.addFilmsDataReturn({
                results,
                page
            });
            actionTest.setState({
                films: {
                    filmById: {},
                    filmIdList: [],
                    currentPage: 1,
                    filmsAreLoading: false,
                    searchQuery: "test"
                }
            });
            actionTest.dispatchSync(actions.getFilmsData('test2'));
        });

        it('should call getFilmsData method from FilmsDbService for first page', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][0]).toBe(1);
        });

        it('should call getFilmsData method from FilmsDbService for search query "test2"', () => {
            expect(mockFilmsDbService.getFilmsData.mock.calls[0][1]).toBe('test2');
        });

        it('should dispatch SEARCH_QUERY action with query "test2"', () => {
            expect(actionTest.getDispatched(0).action.type).toBe(actionTypes.SEARCH_QUERY);
            expect(actionTest.getDispatched(0).action.query).toBe('test2');
        });

        it('should dispatch FILMS_LOAD_SUCCESS action with items array which FilmsDbService returns and page number 1', () => {
            expect(actionTest.getDispatched(2).action.type).toBe(actionTypes.FILMS_LOAD_SUCCESS);
            expect(actionTest.getDispatched(2).action.items).toBe(results);
            expect(actionTest.getDispatched(2).action.page).toBe(1);
        });

    });

});