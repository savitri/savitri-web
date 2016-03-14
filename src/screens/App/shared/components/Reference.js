import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import React from 'react';
import { Link } from 'react-router';


import { getCompareSentenceUrl } from '../../../../config/endpoints';

const styles = {
    self: {
        display: 'flex',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    children: {
        display: 'inline-flex'
    },
    refText: {
        paddingTop: 16,
        paddingBottom: 16
    },
    menuStyle: {
        fontSize: '85%'
    },
    hidden: {
        display: 'none'
    }
};


export default class Reference extends React.Component {
    constructor(props) {

        super(props);
        this.handleCopy = this.handleCopy.bind(this);
        // this.clipboard = new Clipboard('.copy-btn');
        this.bindCopyBtn = this.bindCopyBtn.bind(this);
    }

    componentWillUnmount() {

        // this.clipboard.destroy();
        // console.log('unmount');
    }

    getReferenceMenu(contextShown) {

        return (
            <IconMenu
                iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
                iconStyle={ contextShown ? { display: 'inherit' } : { display: 'none' } }
                menuStyle={ styles.menuStyle }
                >
                <MenuItem innerDivStyle={ styles.menuStyle } primaryText="Copy link" onTouchTap={ this.handleCopy } data-clipboard-text={ this.props.refText } />
                <MenuItem
                    primaryText="Compare"
                    containerElement={ <Link to={ getCompareSentenceUrl(this.props.refId) } /> }
                    innerDivStyle={ styles.menuStyle }
                    />
            </IconMenu>
        );
    }

    bindCopyBtn(ref) {

        this.copyBtn = ref;
    }

    handleCopy() {

        this.copyBtn.click();
    }

    render() {

        const { contextShown, sectionId, sentenceId } = this.props;

        const refText = '||' + sectionId + '.' + sentenceId + '||';
        const refUrl = window.location.origin + window.location.pathname + '#' + sentenceId;

        return (
            <div className='col-xs-2' style={ styles.self }>
                <div style={ styles.children }>
                    <button ref={ this.bindCopyBtn } data-clipboard-text={ refUrl } className="copy-btn" style={ styles.hidden }/>
                    { this.props.referenceShown ? <div style={ styles.refText }>{ <small>{ refText }</small> }</div> : null }
                    { this.getReferenceMenu(contextShown) }
                </div>
            </div>
        );
    }
}


Reference.propTypes = {
    contextShown: React.PropTypes.bool,
    refId: React.PropTypes.string,
    refIds: React.PropTypes.array,
    refText: React.PropTypes.string
};
