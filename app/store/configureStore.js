import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {reducer} from "../reducers/index.js";
/*import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers/index';
import rootSaga from '../sagas/index'


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(appReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);*/

export const store = createStore(reducer, applyMiddleware(thunk))