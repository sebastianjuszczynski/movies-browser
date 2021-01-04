import { all } from "redux-saga/effects";
import { watchSetItemId } from "./features/itemSaga";
import { watchSetActivePath } from "./features/listSaga";
import { watchfetchCommon } from "./common/commonSaga";
import { watchSetActiveSearchPath } from "./features/Search/searchSaga";

export default function* rootSaga() {
    yield all([
        watchSetActiveSearchPath(),
        watchSetActivePath(),
        watchSetItemId(),
        watchfetchCommon(),
    ]);
};