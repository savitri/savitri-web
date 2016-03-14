// import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import _ from 'lodash';

import sagas from '../sagas';
import * as appReducers from '../screens/App/reducers';
import postsReducer from '../screens/App/screens/Blog/reducers';
import * as readReducers from '../screens/App/screens/Read/reducers';
// import counterReducer from '../screens/App/screens/Counter/reducers';
// import readReducer from '../screens/App/screens/Read/reducers';
import compareReducer from '../screens/App/screens/Compare/reducers';
import postReducer from '../screens/App/screens/Post/reducers';


const reducers = {
    // counter: counterReducer,
    compare: compareReducer,
    blog: postsReducer,
    post: postReducer
};

const reducer = combineReducers(_.merge(reducers, appReducers, readReducers));

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware(sagas))(createStore);
// const store = createStoreWithMiddleware(reducer, window.__INITIAL_STATE__);

const getStore = (initialState) => {

    return createStoreWithMiddleware(reducer, initialState);
};

export default getStore;
