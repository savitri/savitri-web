import MenuItem from 'material-ui/lib/menus/menu-item';
import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/lib/select-field';

// export default function EditionSelector({ editions }) {

//     return (
//         <SelectField value={ editions.length ? editions[0].n : null }>
//             {
//                 editions.map((edition, index) => {

//                     return (
//                         <MenuItem
//                             key={ index }
//                             primaryText={ edition.t + ' Edition' }
//                             value={ edition.n }
//                         />
//                     );
//                 })
//             }
//         </SelectField>
//     );
// };


const styles = {
    label: {
        paddingLeft: 16,
        paddingRight: 16
    }
};


export default class EditionSelector extends Component {
    render() {

        const { editions } = this.props;

        if (!editions.length) {
            return null;
        }

        return (
            <SelectField
                labelStyle={ styles.label }
                onChange={ this.props.onEditionChange }
                value={ this.props.selected }
            >
                {
                    editions.map((edition, index) => {

                        return (
                            <MenuItem
                                key={ index }
                                primaryText={ edition.t }
                                value={ edition.ed }
                                />
                        );
                    })
                }
            </SelectField>
        );
    }
}