import React from 'react';

export default function Line(props) {

    const { line, index } = props;

    return (
        <span>
            { index > 0 ? <br/> : null }
            { line.txt }
        </span>
    );
}

Line.propTypes = {
    index: React.PropTypes.number,
    isLast: React.PropTypes.bool,
    line: React.PropTypes.object
};
