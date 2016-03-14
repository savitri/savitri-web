let API_ENDPOINT;
let PROXY_ENDPOINT;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    API_ENDPOINT = 'http://localhost:8000/api';
    PROXY_ENDPOINT = 'http://localhost:8001/api';
}
else {
    API_ENDPOINT = process.env.API_ENDPOINT;
    PROXY_ENDPOINT = process.env.PROXY_ENDPOINT;
}

export { API_ENDPOINT, PROXY_ENDPOINT };


// Compare

export const COMPARE_SENTENCE_BASE_URL = '/compare/sentence/';

export const getCompareSentenceUrl = (refId) => {

    return COMPARE_SENTENCE_BASE_URL + refId;
};


// Editions

const DEFAULT_EDITION = '1950';

const EDITIONS_BASE_URL = '/editions';

const getEditionParam = (edition) => {

    return (edition !== DEFAULT_EDITION) && (typeof edition !== 'undefined') ? `?edition=${edition}` : '';
};

export const getEditionsUrl = () => {

    return EDITIONS_BASE_URL;
};

export const EDITION_BASE_URL = '/edition';

export const getEditionUrl = (edition) => {

    return EDITION_BASE_URL + getEditionParam(edition);
};


// Read

export const READ_BASE_URL = '/read';

export const getReadUrl = (book, canto, section, edition) => {

    // const editionParam = (edition !== DEFAULT_EDITION) && (typeof edition !== 'undefined') ? `?edition=${edition}` : '';

    return `${READ_BASE_URL}/${book}/${canto}/${section}` + getEditionParam(edition);
};

// Blog and Post

export const BLOG_BASE_URL = '/blogs';

export const getBlogUrl = (blog) => {

    return `${BLOG_BASE_URL}/${blog}`;
};

export const getBlogPostsUrl = (blog) => {

    return `${BLOG_BASE_URL}/${blog}/posts`;
};

export const getBlogPostUrl = (blog, post) => {

    return getBlogPostsUrl(blog) + '/' + post;
};
