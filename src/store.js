import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/listSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listReducer,
        movie: movieReducer,
    },
    middleware: [SagaMiddleware],
});
SagaMiddleware.run(rootSaga);

export default store;