import 'babel-polyfill';
import React from 'react';
import ReactTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/lib/createBrowserHistory';
// import sagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
import { render } from 'react-dom';
// import createLogger from 'redux-logger';
import _ from 'lodash';
import getStore from '../config/store';
// import { syncHistory, routeReducer } from 'react-router-redux';


import routes from '../config/routes';
// import sagas from '../sagas';
// import { initCounter as bootstrapAction } from '../screens/Counter/actions';


// console.log(getStore);

const history = createBrowserHistory();
// const reducers = {
//     counter: counterReducer,
//     read: readReducer,
//     compare: compareReducer
// };
// // _.merge()
// // const reducer = combineReducers({
// //     appReducers,
// //     counter: counterReducer,
// //     read: readReducer,
// //     compare: compareReducer
// //     // routing: routeReducer
// // });

// const reducer = combineReducers(_.merge(reducers, appReducers));

// // console.log(reducer);
// // const reduxRouterMiddleware = syncHistory(history);
// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware(sagas))(createStore);
// const store = createStoreWithMiddleware(reducer, window.__INITIAL_STATE__);

const store = getStore(window.__INITIAL_STATE__);

// console.log(store);


if (!window.env || window.env === 'development') {
    // store.dispatch(bootstrapAction());
}


ReactTapEventPlugin();


render(
    <Provider store={ store }>
        <Router routes={ routes } history={ history } />
    </Provider>,
    document.getElementById('react-root')
);
