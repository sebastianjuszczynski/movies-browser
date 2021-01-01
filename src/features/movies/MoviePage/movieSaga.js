import { takeEvery, call, put, delay } from "redux-saga/effects";
import store from "../../../store";
import { getApiData } from "./../../getApiData";
import {
    setMovie,
    fetchMovieError,
    fetchMovieSuccess,
} from "./movieSlice";

function* fetchMovieHandler() {
    const id = store.getState().movies.movieId;
    try {
        yield delay(500);
        const movieData = yield call();
        getApiData(`https://api.themoviedb.org/3/movie/${id}?api_key=db28f87903ed5f61125cde9d85f339b2&language=en-US`);
        yield put(fetchMovieSuccess(movieData));
    } catch (error) {
        yield put(fetchMovieError());
        yield call(alert, "Something went wrong...");
    }
};

export function* watchSetMovie() {
    yield takeEvery(setMovie.type, fetchMovieHandler);
};