import React, { Component, PropTypes } from 'react';
import { eq } from 'lodash';


import Section from './Section';


export default class Read extends Component {
    constructor(props) {

        super(props);
        this.handleToggleSectionBreaks = this.handleToggleSectionBreaks.bind(this);
        this.handleToggleReferences = this.handleToggleReferences.bind(this);
    }


    componentDidMount() {

        const { bookParam, cantoParam, sectionParam, edition } = this.props;
        // // this.props.dispatch(actions.getReadData(ENDPOINT, [bookParam, cantoParam, sectionParam], this.props.location.query));
        // this.props.dispatch(actions.getReadData(getReadUrl(bookParam, cantoParam, sectionParam, this.props.location.query.edition)));
        this.props.getData(bookParam, cantoParam, sectionParam, edition);
    }

    componentDidUpdate(prevProps) {

        const thisPropParams = this.props.params;
        const prevPropParams = prevProps.params;

        if (!eq(thisPropParams, prevPropParams) || !eq(this.props.edition, prevProps.edition)) {
            this.props.getData(thisPropParams.book, thisPropParams.canto, thisPropParams.section, this.props.edition);
        }

        const scrollToAnchor = () => {

            const hashParts = window.location.hash.split('#');
            if (hashParts.length === 2) {
                const hash = hashParts[1];
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView();
                }
            }
        };

        scrollToAnchor();
    }

    // componentWillUnmount() {

    //     // this.props.reset();
    // }

    handleToggleSectionBreaks(event, value) {

        this.props.setSectionBreaks(value);
    }

    handleToggleReferences(event, value) {

        this.props.showReferences(value);
    }

    render() {

        const { readData, readSettings, setSectionBreaks } = this.props;

        if (!readData.section) {
            return null;
        }

        return (
            <Section
                readData={ readData }
                readSettings={ readSettings }
                onBreaksToggle={ this.handleToggleSectionBreaks }
                onReferencesToggle={ this.handleToggleReferences }
                />
        );
    }
}


Read.propTypes = {
    bookParam: PropTypes.string,
    cantoParam: PropTypes.string,
    sectionParam: PropTypes.string
};
