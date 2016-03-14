export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';

export const getPosts = (url) => {

    return {
        type: GET_POSTS,
        url
    };
};

export const setPosts = (data) => {

    return {
        type: SET_POSTS,
        data
    };
};
