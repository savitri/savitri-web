// import { combineReducers } from 'redux';

import { GET_DRAWER_DATA, SET_DRAWER_DATA, TOGGLE_APP_DRAWER, SHOW_PROGRESS, HIDE_PROGRESS, GET_EDITIONS, SET_EDITIONS } from './actions';
import { getNewState } from '../../utils';

// const defaultState = {
//     drawerData: {},
//     drawerOpen: false,
//     loading: false,
//     editions: []
// };


// const old = function (state = defaultState, action) {

//     switch (action.type) {
//         case SET_DRAWER_DATA:
//             return getNewState(state, { drawerData: action.data });
//         case TOGGLE_APP_DRAWER:
//             return getNewState(state, { drawerOpen: !state.drawerOpen });
//         case SHOW_PROGRESS:
//             return getNewState(state, { loading: true });
//         case HIDE_PROGRESS:
//             return getNewState(state, { loading: false });
//         case SET_EDITIONS:
//             return getNewState(state, { editions: action.data });
//         case GET_DRAWER_DATA:
//         case GET_EDITIONS:
//         default:
//             return state;
//     }
// };

export const toc = (state = {}, action) => {

    switch (action.type) {
        case SET_DRAWER_DATA:
            return getNewState(state, action.data);
        case GET_DRAWER_DATA:
        default:
            return state;
    }
};

export const progress = (state = { loading: false }, action) => {

    switch (action.type) {
        case SHOW_PROGRESS:
            return getNewState(state, { loading: true });
        case HIDE_PROGRESS:
            return getNewState(state, { loading: false });
        default:
            return state;
    }
};

export const editions = (state = [], action) => {

    switch (action.type) {
        case SET_EDITIONS:
            return action.data;
        case GET_EDITIONS:
        default:
            return state;
    }
};

export const appDrawer = (state = { drawerOpen: false }, action) => {

    switch (action.type) {
        case TOGGLE_APP_DRAWER:
            return getNewState(state, { drawerOpen: !state.drawerOpen });
        default:
            return state;
    }
};

// const appReducer = combineReducers({
//     toc,
//     progress,
//     editions,
//     appDrawer
// });

// console.log(appReducer);

// export default appReducer;
