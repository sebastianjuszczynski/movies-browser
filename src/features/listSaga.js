import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getApiData } from "../getApiData";

import store from "../store";
import {
    setActivePath,
    fetchListError,
    fetchListSuccess,
} from "./listSlice";

function* fetchListHandler() {
    const activePath = store.getState().list.activePath;
    try {
        yield delay(500);
        const data = yield call(() => getApiData(activePath));
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
        yield call(alert, "Something went wrong...");
    }
};

export function* watchSetActivePath() {
    yield takeEvery(setActivePath.type, fetchListHandler);
};