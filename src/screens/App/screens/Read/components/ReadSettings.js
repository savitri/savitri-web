import IconButton from 'material-ui/lib/icon-button';
import Popover from 'material-ui/lib/popover/popover';
// import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import React from 'react';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';
import Toggle from 'material-ui/lib/toggle';


const styles = {
    self: {
        alignSelf: 'flex-end'
    },
    // onHover: {
    //     ':hover': {
    //         backgroundColor: 'red'
    //     }
    // }
    popover: {
        padding: 20,
        fontSize: '80%'
    }
};


export default class ReadSettings extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            open: false
        };
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleTouchTap(event) {

        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    }

    handleRequestClose() {

        this.setState({
            open: false
        });
    }

    render() {

        const { breaks, references } = this.props.settings;

        return (
            <div style={ styles.self }>
                <IconButton onTouchTap={ this.handleTouchTap }><SettingsIcon /></IconButton>
                <Popover
                    open={ this.state.open }
                    anchorEl={ this.state.anchorEl }
                    onRequestClose={ this.handleRequestClose }
                    >
                    <div style={ styles.popover }>
                        <Toggle
                            defaultToggled={ breaks }
                            label="Breaks"
                            style={ styles.toggle }
                            onToggle={ this.props.onHandleToggle }
                            />
                        <Toggle
                            defaultToggled={ references }
                            label="References"
                            style={ styles.toggle }
                            onToggle={ this.props.onHandleReferencesToggle }
                            />
                    </div>
                </Popover>
            </div>
        );
    }
}

ReadSettings.propTypes = {
    onHandleToggle: React.PropTypes.func.isRequired
};
