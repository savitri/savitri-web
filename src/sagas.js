import fetch from 'isomorphic-fetch';
import { call, fork, put, take } from 'redux-saga/effects';


import { API_ENDPOINT, PROXY_ENDPOINT } from './config/endpoints';
import * as appActions from './screens/App/actions';
// import * as counterActions from './screens/App/screens/Counter/actions';
import * as readActions from './screens/App/screens/Read/actions';
import * as compareActions from './screens/App/screens/Compare/actions';
import * as blogActions from './screens/App/screens/Blog/actions';
import * as postActions from './screens/App/screens/Post/actions';


const getData = function (endpoint, params, queries, proxy) {

    let paramString = '';
    let queryString = '';
    if (params && params.length > 1) {
        paramString = params.length ? '/' + params.join('/') : '';
    }
    if (queries) {
        const queryParams = Object.keys(queries);
        queryString = queryParams.length ? ('?' + queryParams.map((query) => query + '=' + queries[query]).join('&')) : '';
    }
    const url = (proxy ? PROXY_ENDPOINT : API_ENDPOINT) + (endpoint.charAt(0) === '/' ? endpoint : '/' + endpoint) + paramString + queryString;

    return fetch(url)
        .then((response) => response.json())
        .then((json) => json)
        .catch((err) => console.error(err.message));
};


const watchEditions = function* () {

    let editionAction;

    while (editionAction = yield take(appActions.GET_EDITIONS)) {
        const editions = yield call(interceptData, editionAction.endpoint);
        yield put(appActions.setEditions(editions));
    }
};

const interceptData = function* (endpoint, params, queries, proxy) {

    if (process.env.BROWSER) {
        yield put(appActions.showProgress());
    }
    const readData = yield call(getData, endpoint, params, queries, proxy);
    if (process.env.BROWSER) {
        yield put(appActions.hideProgress());
    }
    return readData;
};


const watchEdition = function* () {

    let action;
    while (action = yield take(appActions.GET_DRAWER_DATA)) {
        const edition = yield call(interceptData, action.endpoint);
        yield put(appActions.setDrawerData(edition));
    }
};


const watchReadMount = function* (...args) {

    let action;
    while (action = yield take(readActions.GET_READ_DATA)) {
        // console.log(args[0]());
        // yield put(appActions.showProgress());
        // const readData = yield call(getData, action.endpoint, action.params, action.queries);
        // const readData = yield call(interceptData, action.endpoint, action.params, action.queries);
        const readData = yield call(interceptData, action.endpoint);
        yield put(readActions.setReadData(readData));
        // yield put(appActions.hideProgress());
    }
};


// const watchCounterMount = function* () {

//     // console.log('pre yield');
//     while (yield take(counterActions.INIT_COUNTER)) {
//         // console.log('yield');
//         yield put(counterActions.setCounter(0));
//     }
// };

const watchCompareMount = function* () {

    let action;
    while (action = yield take(compareActions.GET_COMPARE)) {
        // yield put(appActions.showProgress());
        const compareData = yield call(interceptData, action.url);
        yield put(compareActions.setCompareData(compareData));
        // yield put(appActions.hideProgress());
    }
};

const watchBlogMount = function* () {

    let action;
    while (action = yield take(blogActions.GET_POSTS)) {
        const blogData = yield call(interceptData, action.url, null, null, true);
        yield put(blogActions.setPosts(blogData));
    }
};

const watchPostMount = function* () {

    let action;
    while (action = yield take(postActions.GET_POST)) {
        const postData = yield call(interceptData, action.url, null, null, true);
        yield put(postActions.setPost(postData));
    }
};

const watchDrawerToggled = function* () {

    let action;
    while (action = yield take(appActions.TOGGLE_APP_DRAWER)) {
        console.log('taken');
        yield put(appActions.getDrawerData());
    }
};


const root = function* (getState) {

    // yield fork(watchAppMount);
    yield fork(watchEditions);
    yield fork(watchEdition);
    yield fork(watchReadMount, getState);
    // yield fork(watchCounterMount);
    yield fork(watchCompareMount);
    yield fork(watchBlogMount);
    yield fork(watchPostMount);
    // yield fork(watchDrawerToggled);
};


export default root;
