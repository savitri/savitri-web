import { GET_POST, SET_POST, RESET_POST } from './actions';
import { getNewState } from '../../../../utils';

const defaultState = {};

export default (state = defaultState, action) => {

    switch (action.type) {
        case GET_POST:
            return state;
        case SET_POST:
            return getNewState(state, action.data);
        case RESET_POST:
            return defaultState;
        default:
            return state;
    }
};
