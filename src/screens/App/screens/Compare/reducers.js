import { GET_COMPARE, SET_COMPARE } from './actions';

const defaultState = {};

const readReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_COMPARE:
            return Object.assign({}, state, { compare: action.data });
        case GET_COMPARE:
        default:
            return state;
    }
};

export default readReducer;
