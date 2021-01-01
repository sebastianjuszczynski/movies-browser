import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/listSlice";
import itemReducer from "./features/itemSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listReducer,
        item: itemReducer,
    },
    middleware: [SagaMiddleware],
});
SagaMiddleware.run(rootSaga);

export default store;