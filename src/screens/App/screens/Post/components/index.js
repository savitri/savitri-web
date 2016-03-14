import React, { Component, PropTypes } from 'react';

import Layout from './Layout';

export default class Post extends Component {
    componentDidMount() {

        this.props.getPost();
    }

    componentWillUnmount() {

        this.props.reset();
    }

    render() {

        const { post } = this.props;

        if (!post.content) {
            return null;
        }

        return (
            <Layout post={ post } />
        );
    }
}
