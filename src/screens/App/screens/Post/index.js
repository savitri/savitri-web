import { connect } from 'react-redux';

import Post from './components';
import { getBlogPostUrl } from '../../../../config/endpoints';
import * as actions from './actions';

const mapStateToProps = (state, ownProps) => {

    return {
        post: state.post
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        getPost: () => dispatch(actions.getPost(getBlogPostUrl(ownProps.params.blog, ownProps.params.post))),
        reset: () => dispatch(actions.resetPost())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
