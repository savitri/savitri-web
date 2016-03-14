import React from 'react';
import Slider from 'material-ui/lib/slider';


import Edition from './Edition';


export default class EditionContainer extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            selectedIndex: 0
        };
        this.handleSliderChange = this.handleSliderChange.bind(this);
    }

    handleSliderChange(event, value) {

        // eslint-disable-next-line react/no-set-state
        this.setState({
            selectedIndex: Math.round((this.props.editions.length - 1) * value)
        });
    }

    render() {

        const { editions } = this.props;
        // editions.map((edition) => )
        const step = parseFloat(1 / (editions.length - 1));
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-4">
                        <Slider description='Move the slider to select edition' onChange={ this.handleSliderChange } step={ step } />
                    </div>
                </div>
                <div className="row">
                    { this.state.selectedIndex !== -1 ? <Edition edition={ editions[this.state.selectedIndex] } /> : <div className="col-xs-offset-2 col-xs-8">Move the slider to select an edition</div> }
                </div>
            </div>
        );
    }
}
