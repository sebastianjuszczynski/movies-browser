import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getApiData } from "../../getApiData";

import store from "./../../../store";
import {
    setActivePage,
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    const page = store.getState().movies.activePage;
    try {
        yield delay(500);
        const popularMovies = yield call(() => getApiData(`https://api.themoviedb.org/3/movie/popular?api_key=db28f87903ed5f61125cde9d85f339b2&language=en-US&page=${page}`));
        yield put(fetchPopularMoviesSuccess(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Something went wrong...");
    }
};

export function* watchSetActivePages() {
    yield takeEvery(setActivePage.type, fetchPopularMoviesHandler);
};