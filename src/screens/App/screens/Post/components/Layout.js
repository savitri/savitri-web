import React, { PropTypes } from 'react';
import moment from 'moment';

import PaperCustom from 'components/PaperCustom'; // eslint-disable-line import/no-unresolved

export default function Layout({ post }) {

    return (
        <div className="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
            <PaperCustom>
                <h4><em>{ post.series_title }</em></h4>
                <h1>{ post.title }</h1>
                <small>Published { moment(post.published_at).fromNow() }</small>
                <hr />
                <div dangerouslySetInnerHTML={ { __html: post.content } } />
            </PaperCustom>
        </div>
    );
}
