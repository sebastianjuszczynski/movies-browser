import { takeEvery, call, put } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import {
    fetchCommonError,
    fetchCommonSuccess,
    fetchCommon
} from "./commonSlice";
import apiKey from "./apiKey";
import language from "./language";

function* fetchCommonHandler() {
    try {
        const genres = yield call(getApiData,
            `https://api.themoviedb.org/3/genre/movie/list${apiKey}${language}`
        );
        yield put(fetchCommonSuccess(genres));
    } catch (error) {
        yield put(fetchCommonError());
    }
};

export function* watchfetchCommon() {
    yield takeEvery(fetchCommon.type, fetchCommonHandler);
};