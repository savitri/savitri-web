import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import App from './components';
import * as actions from './actions';


const mapStateToProps = (state) => {

    return {
        toc: state.toc,
        editions: state.editions,
        progress: state.progress,
        appDrawer: state.appDrawer
    };
};


const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(actions, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
