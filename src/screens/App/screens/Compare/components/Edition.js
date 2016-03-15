import PaperCustom from 'components/PaperCustom'; // eslint-disable-line import/no-unresolved
import React, { PropTypes } from 'react';
import { omit } from 'lodash';


import Reference from 'components/Reference'; // eslint-disable-line import/no-unresolved
import Sentence from 'components/Sentence'; // eslint-disable-line import/no-unresolved


export default function Edition({ edition }) {

    return (
        <div className="col-xs-offset-2 col-xs-8">
            <PaperCustom>
                <h2>{ `${ edition.t } (${ edition.ed })` }</h2>
                { edition.sentences.map((sentence, index) => {

                    const meta = omit(sentence, ['lines']);
                    meta.ed = edition.ed;
                    return (
                        <div className="row" key={ index }>
                            <Sentence sentence={ sentence } sectionId={ parseInt(sentence.ref.split('.')[0]) }  key={ sentence.id }/>
                            <Reference meta={ meta } sectionId={ parseInt(sentence.ref.split('.')[0]) } sentenceId={ sentence.id } referenceShown contextShown />
                        </div>
                    );
                }) }
            </PaperCustom>
        </div>
    );
}


Edition.propTypes = {
    edition: PropTypes.object.isRequired
};
