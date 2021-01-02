import { all } from "redux-saga/effects";
import { watchSetItemId } from "./features/itemSaga";
import { watchSetActivePages } from "./features/listSaga";
import { watchfetchCommon } from "./common/commonSaga";

export default function* rootSaga() {
    yield all([
        watchSetActivePages(),
        watchSetItemId(),
        watchfetchCommon(),
    ]);
};