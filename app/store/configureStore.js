import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {allReducer} from "../reducers/index.js";
/*import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers/console';
import rootSaga from '../sagas/console'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(appReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);*/
export const store = createStore(allReducer, applyMiddleware(thunk))