import React from 'react';
// import Clipboard from 'clipboard';
import PaperCustom from 'components/PaperCustom'; // eslint-disable-line import/no-unresolved
import Snackbar from 'material-ui/lib/snackbar';

import ReadSettings from './ReadSettings';
import SentenceContainer from './SentenceContainer';


const styles = {
    readSettingsComponent: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
};


const getBreadcrumbs = (section) => {

    return [
        {
            label: section.edition.name
        },
        {
            label: section.book.title
        },
        {
            label: section.canto.name
        },
        {
            label: `Section ${section.id}`
        }
    ];
};

export default class Section extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);

        this.clipboard = new Clipboard('.copy-btn');

        this.clipboard.on('success', (e) => {

            // eslint-disable-next-line react/no-set-state
            this.setState({
                open: true
            });
            e.clearSelection();
        });
    }

    componentWillUnmount() {

        this.clipboard.destroy();
    }

    getHTMLSentences(section) {

        const { breaks, references } = this.props.readSettings;
        const { readSettings } = this.props;

        // const breaks = this.props.readSettings.breaks;

        const sectionLength = section.sentences.length;

        const sentenceParagraphs = section.sentences.map((sentence, index) => {

            return (
                <SentenceContainer key={ sentence.id } sectionId={ section.run } sentence={ sentence } readSettings={ readSettings } isLast={ index === sectionLength - 1 } />
            );
        });

        return sentenceParagraphs;
    };


    handleRequestClose() {

        // eslint-disable-next-line react/no-set-state
        this.setState({
            open: false
        });
    }

    handleToggle(event, value) {

        this.props.onBreaksToggle(event, value);
    }

    render() {

        const { readData, readSettings } = this.props;

        const section = readData.section;

        return (
            <div className="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
                <PaperCustom breadcrumbs={ getBreadcrumbs(section) }>
                    <div className="row">
                        <div className="col-xs-10">
                            <h2>{ section.canto.title }</h2>
                            <h3>Section { section.id } ({ section.run }) </h3>
                        </div>
                        <div className="col-xs-2" style={ styles.readSettingsComponent }>
                            <ReadSettings
                                onHandleToggle={ this.props.onBreaksToggle }
                                onHandleReferencesToggle={ this.props.onReferencesToggle }
                                settings={ this.props.readSettings }
                                />
                        </div>
                    </div>
                    <hr/>
                    <div>{ this.getHTMLSentences(section) }</div>
                </PaperCustom>
                <Snackbar
                    open={ this.state.open }
                    autoHideDuration={ 3000 }
                    message="Link copied to clipboard"
                    onRequestClose={ this.handleRequestClose }
                    bodyStyle={ { fontFamily: 'sans-serif' } }
                    />
            </div>
        );
    }
};

Section.propTypes = {
    section: React.PropTypes.object
};
