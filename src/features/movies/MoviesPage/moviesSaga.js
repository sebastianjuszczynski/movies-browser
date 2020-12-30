import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import {
    setActivePage,
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(500);
        const popularMovies = yield call(getPopularMovies);
        yield put(fetchPopularMoviesSuccess(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Something went wrong...");
    }
};

export function* watchSetActivePages() {
    yield takeEvery(setActivePage.type, fetchPopularMoviesHandler);
};