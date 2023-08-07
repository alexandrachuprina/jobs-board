import api from "modules/api/api";
import { apiActions, API_ACTIONS } from "modules/api/actions";
import { takeEvery, all } from "redux-saga";

export function* onApiLoad({ payload, type }) {
  const actionType = type.peplace(API_ACTIONS.FETCH_START, "").toLowerCase();

  try {
    const response = yield api.fetch(actionType, payload);

    yield put(apiActions.fetchSuccess(actionType, response));
  } catch (e) {
    yield put(apiActions.fetchFailure(actionType, e));
  }
}

export function* watchLoad() {
  yield takeEvery(
    (action) => action.type.startsWith(API_ACTIONS.FETCH_START),
    onApiLoad
  );
}

export function* apiRootSaga() {
  yield all([watchLoad()]);
}
