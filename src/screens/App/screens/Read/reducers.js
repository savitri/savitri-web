import { GET_READ_DATA, SET_READ_DATA, COMPARE_SENTENCE, SET_SECTION_BREAKS, SHOW_REFERENCES, RESET } from './actions';
import { getNewState } from '../../../../utils';


// const defaultState = {
//     breaks: true
// };


// const readReducer = (state = defaultState, action) => {

//     switch (action.type) {
//         case SET_READ_DATA:
//             // console.log('set read');
//             return Object.assign({}, state, { section: action.data });
//         case SET_SECTION_BREAKS:
//             return Object.assign({}, state, { breaks: action.value });
//         case GET_READ_DATA:
//         case COMPARE_SENTENCE:
//         default:
//             return state;
//     }
// };

export const readData = (state = {}, action) => {

    switch (action.type) {
        case SET_READ_DATA:
            return getNewState(state, { section: action.data });
        case GET_READ_DATA:
            return state;
        case RESET:
            return {};
        default:
            return state;
    }
};


export const readSettings = (state = { breaks: true, references: true }, action) => {

    switch (action.type) {
        case SET_SECTION_BREAKS:
            return getNewState(state, { breaks: action.value });
        case SHOW_REFERENCES:
            return getNewState(state, { references: action.value });
        default:
            return state;
    }
};



// export default readReducer;
