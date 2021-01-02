import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import apiKey from "../common/apiKey";
import language from "../common/language";
import store from "../store";
import {
    setActivePage,
    fetchListError,
    fetchListSuccess,
} from "./listSlice";

function* fetchListHandler() {
    const page = store.getState().list.activePage;
    const activePath = store.getState().list.activePath;
    try {
        yield delay(500);
        const data = yield call(() => getApiData(`https://api.themoviedb.org/3${activePath}?api_key=${apiKey}&language=${language}&page=${page}`
        ));
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
        yield call(alert, "Something went wrong...");
    }
};

export function* watchSetActivePages() {
    yield takeEvery(setActivePage.type, fetchListHandler);
};