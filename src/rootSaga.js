import { all } from "redux-saga/effects";
import { watchSetMovie } from "./features/movies/MoviePage/movieSaga";
import { watchSetActivePages } from "./features/listSaga";

export default function* rootSaga() {
    yield all([
        watchSetActivePages(),
        watchSetMovie(),
    ]);
};