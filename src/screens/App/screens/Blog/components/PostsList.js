import React, { PropTypes } from 'react';

import PostItem from './PostItem';

export default function ({ blog, posts }) {

    return (
        <div className="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
            { posts.map((post, i) => <PostItem blog={ blog } post={ post } key={ i } />) }
        </div>
    );
}
