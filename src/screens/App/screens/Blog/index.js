import { connect } from 'react-redux';

import Blog from './components';
import { getBlogPostsUrl } from '../../../../config/endpoints';
import * as actions from './actions';

const mapStateToProps = (state, ownProps) => {

    return {
        blog: ownProps.params.blog,
        posts: state.blog.posts
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        getPosts: () => dispatch(actions.getPosts(getBlogPostsUrl(ownProps.params.blog)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
