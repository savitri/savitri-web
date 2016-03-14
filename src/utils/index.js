import { assign } from 'lodash';

export const getNewState = (state, ...updates) => {

    let newState = assign({}, state);
    for (const i in updates) {
        newState = assign(newState, updates[i]);
    }
    return newState;
};
