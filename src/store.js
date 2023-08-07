import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import apiReducer from "modules/api/reducer";
import createSagaMiddleware from 'redux-saga';
import { apiRootSaga } from "modules/api/saga";

const reducers = combineReducers({
  api: apiReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(apiRootSaga)

export default store;