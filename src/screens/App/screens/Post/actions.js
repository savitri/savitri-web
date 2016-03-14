export const GET_POST = 'GET_POST';
export const SET_POST = 'SET_POST';
export const RESET_POST = 'RESET_POST';

export const getPost = (url) => {

    return {
        type: GET_POST,
        url
    };
};

export const setPost = (data) => {

    return {
        type: SET_POST,
        data
    };
};

export const resetPost = () => {

    return {
        type: RESET_POST
    };
};
