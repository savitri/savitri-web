import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import moment from 'moment';

import PaperCustom from 'components/PaperCustom'; // eslint-disable-line import/no-unresolved
// import { getBlogPostUrl } from '../../../../../config/endpoints';
// import { getBlogPostUrl } from '../../../../../config/endpoints';
import { getBlogPostUrl } from '../../../../../config/endpoints';

export default function ({ blog, post }) {

    // console.log(post);
    return (
        <PaperCustom>
            <h1>{ post.title }</h1>
            <small>Published { moment(post.published_at).fromNow() } by { post.author }</small>
            <div dangerouslySetInnerHTML={ { __html: post.excerpt_content.text } } />
            <Link to={ getBlogPostUrl(blog, post.url) }>Go to post</Link>
        </PaperCustom>
    );
}
