export const GET_COMPARE = 'GET_COMPARE';
export const SET_COMPARE = 'SET_COMPARE';


export const getCompareData = (url) => {

    return {
        type: GET_COMPARE,
        url
    };
};


export const setCompareData = (data) => {

    return {
        type: SET_COMPARE,
        data
    };
};
