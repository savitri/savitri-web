import React, { Component, PropTypes } from 'react';

import PostList from './PostsList';

export default class Blog extends Component {
    componentDidMount() {

        this.props.getPosts();
    }

    render() {

        const { blog, posts } = this.props;

        return (
            <PostList blog={ blog } posts={ posts } />
        );
    }
}
