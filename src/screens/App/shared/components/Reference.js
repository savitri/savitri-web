import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import React from 'react';
import { Link } from 'react-router';


import { getCompareSentenceUrl, getReadUrl } from '../../../../config/endpoints';

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

        const refId = this.props.refId ? this.props.refId : this.props.refIds;

        return (
            <IconMenu
                iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
                iconStyle={ contextShown ? { display: 'inherit' } : { display: 'none' } }
                menuStyle={ styles.menuStyle }
                >
                <MenuItem innerDivStyle={ styles.menuStyle } primaryText="Copy link" onTouchTap={ this.handleCopy } data-clipboard-text={ this.props.refText } />
                { refId ? <MenuItem
                    primaryText="Compare"
                    containerElement={ <Link to={ getCompareSentenceUrl(this.props.refId ? this.props.refId : this.props.refIds) } /> }
                    innerDivStyle={ styles.menuStyle }
                    /> : null }
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

        const { contextShown, sectionId, sentenceId, meta } = this.props;

        const refText = '||' + sectionId + '.' + sentenceId + '||';
        let refUrl;

        if (meta) {
            refUrl = window.location.origin + getReadUrl(meta.book, meta.canto, meta.section, meta.ed) + '#' + sentenceId;
        }
        else {
            let baseUrl;
            if (window.location.hash !== '') {
                baseUrl = window.location.href.slice(0, window.location.href.indexOf(window.location.hash));
            } else {
                baseUrl = window.location.href;
            }
            refUrl = baseUrl + '#' + sentenceId;
        }

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
