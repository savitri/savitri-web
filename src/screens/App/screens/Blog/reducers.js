import { GET_POSTS, SET_POSTS } from './actions';
import { getNewState } from '../../../../utils';

const defaultState = { posts: [] };

const postsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case GET_POSTS:
            return state;
        case SET_POSTS:
            // console.log(action.data);
            return getNewState(state, { posts: action.data });
        default:
            return state;
    }
};

export default postsReducer;
