import React from 'react';

import Line from './Line';

export default class Sentence extends React.Component {
    shouldComponentUpdate(nextProps) {

        // if (this.props.sectionId === nextProps.sectionId && this.props.sentence.id === nextProps.sentence.id) {
        //     return false;
        // }

        return true;
    }

    render() {

        const { sectionId, sentence } = this.props;

        const lines = sentence.lines;
        const numLines = lines.length;
        return (
            <div className="col-xs-10">
                <p id={ sentence.id }>
                    { lines.map((line, index) => {

                        return (
                            <Line
                                index={ index }
                                isLast={ index === numLines - 1 }
                                key={ line.id }
                                line={ line }
                                sectionId={ sectionId }
                                sentenceId={ sentence.id }
                                />
                        );
                    }) }
                </p>
            </div>
        );
    }
}

Sentence.propTypes = {
    sectionId: React.PropTypes.number,
    sentence: React.PropTypes.object
};
