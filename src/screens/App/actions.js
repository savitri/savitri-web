// drawer
export const GET_DRAWER_DATA = 'GET_DRAWER_DATA';
export const TOGGLE_APP_DRAWER = 'TOGGLE_APP_DRAWER';
export const SET_DRAWER_DATA = 'SET_DRAWER_DATA';


export const toggleDrawer = (...args) => {

    return {
        type: TOGGLE_APP_DRAWER
    };
};


export const getDrawerData = (endpoint) => {

    return {
        type: GET_DRAWER_DATA,
        endpoint
    };
};


export const setDrawerData = (data) => {

    return {
        type: SET_DRAWER_DATA,
        data
    };
};


// editions
export const GET_EDITIONS = 'GET_EDITIONS';
export const SET_EDITIONS = 'SET_EDITIONS';


export const getEditions = (endpoint) => {

    return {
        type: GET_EDITIONS,
        endpoint
    };
};


export const setEditions = (data) => {

    return {
        type: SET_EDITIONS,
        data
    };
};


// progress
export const SHOW_PROGRESS = 'SHOW_PROGRESS';
export const HIDE_PROGRESS = 'HIDE_PROGRESS';


export const showProgress = () => {

    return {
        type: SHOW_PROGRESS
    };
};


export const hideProgress = () => {

    return {
        type: HIDE_PROGRESS
    };
};
