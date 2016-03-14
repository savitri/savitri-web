import { connect } from 'react-redux';


import Compare from './components';
import { getCompareSentenceUrl } from '../../../../config/endpoints';
import * as actions from './actions';


const mapStateToProps = (state) => {

    return {
        compare: state.compare.compare
    };
};


const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        getData: () => {

            dispatch(actions.getCompareData(getCompareSentenceUrl(ownProps.params.refId)));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Compare);
