import React, { Component, PropTypes } from 'react';


import EditionContainer from './EditionContainer';


export default class Compare extends Component {
    componentDidMount() {

        this.props.getData();
    }

    render() {

        const { compare } = this.props;

        if (!compare) {
            return null;
        }

        return (
            <EditionContainer editions={ compare } />
        );
    }
}


Compare.propTypes = {
    compare: PropTypes.array,
    getData: PropTypes.func
};
