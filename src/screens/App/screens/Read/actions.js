export const COMPARE_SENTENCE = 'COMPARE_SENTENCE';
export const GET_READ_DATA = 'GET_READ_DATA';
export const SET_READ_DATA = 'SET_READ_DATA';
export const SET_SECTION_BREAKS = 'SET_SECTION_BREAKS';
export const SHOW_REFERENCES = 'SHOW_REFERENCES';
export const RESET = 'RESET';

export const getReadData = (endpoint, params, queries) => {

    return {
        type: GET_READ_DATA,
        endpoint
        // params,
        // queries
    };
};


export const setReadData = (data) => {

    return {
        type: SET_READ_DATA,
        data
    };
};


export const compareSentence = (refId) => {

    return {
        type: COMPARE_SENTENCE,
        refId
    };
};


export const setSectionBreaks = (value) => {

    return {
        type: SET_SECTION_BREAKS,
        value
    };
};


export const showReferences = (value) => {

    return {
        type: SHOW_REFERENCES,
        value
    };
};


export const reset = () => {

    return {
        type: RESET
    };
};
