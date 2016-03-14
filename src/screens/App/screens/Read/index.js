import { connect } from 'react-redux';

import Read from './components';
import { getReadUrl } from '../../../../config/endpoints';
import * as actions from './actions';

const mapStateToProps = (state, ownProps) => {

    return {
        readData: state.readData,
        readSettings: state.readSettings,
        bookParam: ownProps.params.book,
        cantoParam: ownProps.params.canto,
        sectionParam: ownProps.params.section,
        edition: ownProps.location.query.edition
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        getData: (book, canto, section, edition) => dispatch(actions.getReadData(getReadUrl(book, canto, section, edition))),
        setSectionBreaks: (value) => dispatch(actions.setSectionBreaks(value)),
        showReferences: (value) => dispatch(actions.showReferences(value)),
        reset: () => dispatch(actions.reset())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Read);
