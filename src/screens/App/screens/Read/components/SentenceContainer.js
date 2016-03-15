import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import Reference from 'components/Reference'; // eslint-disable-line import/no-unresolved
import Sentence from 'components/Sentence'; // eslint-disable-line import/no-unresolved
// import * as actions from '../actions';

// const mapDispatchToProps = (state) => {

//     return {

//     }
// }

const styles = {
    self: {
        withBreaks: {
            marginBottom: -16
        },
        noBreaks: {
            marginBottom: -32
        }
    }
};

class SentenceContainer extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            hoveredIn: false
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }


    handleMouseEnter() {

        this.setState({
            hoveredIn: true
        });
    }

    handleMouseLeave() {

        this.setState({
            hoveredIn: false
        });
    }

    render() {

        const { dispatch, sectionId, sentence, readSettings, isLast } = this.props;

        // const margin = this.props.breaks ? -16 : -32;

        const style = readSettings.breaks ? styles.self.withBreaks : !isLast ? styles.self.noBreaks : null;

        return (
            <div className="row" onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave } style={ style }>
                <Sentence sectionId={ sectionId } sentence={ sentence } />
                <Reference
                    contextShown={ this.state.hoveredIn }
                    referenceShown={ readSettings.references }
                    refId={ sentence.refId }
                    refIds={ sentence.refIds }
                    sectionId={ sectionId }
                    sentenceId={ sentence.id }
                    />
            </div>
        );
    }
}

SentenceContainer.propTypes = {
    sectionId: React.PropTypes.number,
    sentence: React.PropTypes.object
};


export default SentenceContainer;
