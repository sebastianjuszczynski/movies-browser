import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/MoviesPage/moviesSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
    },
    middleware: [SagaMiddleware],
});
SagaMiddleware.run(rootSaga);

export default store;