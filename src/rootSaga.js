import { all } from "redux-saga/effects";
import { watchSetItemId } from "./features/itemSaga";
import { watchSetActivePath } from "./features/listSaga";
import { watchfetchCommon } from "./common/commonSaga";

export default function* rootSaga() {
    yield all([
        watchSetActivePath(),
        watchSetItemId(),
        watchfetchCommon(),
    ]);
};