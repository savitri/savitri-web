import LeftNav from 'material-ui/lib/left-nav';
import React, { Component, PropTypes } from 'react';


import AppDrawerMenu from './AppDrawerMenu';
import EditionSelector from './EditionSelector';


// export default function AppDrawer({ drawerOpen, drawerData, toggleDrawer, editions, getDrawerData, getEditions }) {

//     // console.log(drawerData.drawerData.parts);
//     // const parts = drawerData.drawerData.parts;
//     return (
//         <LeftNav
//             docked={ false }
//             onRequestChange={ toggleDrawer }
//             open={ drawerOpen }
//         >
//             <EditionSelector editions={ editions } />
//             <AppDrawerMenu handleClose={ toggleDrawer } parts={ drawerData } />
//         </LeftNav>
//     );
// };


export default class AppDrawer extends Component {
    // constructor(props) {

    //     super(props);
    // }

    handleRequestChange(event, value) {

        console.log(value);
        toggleDrawer(event, value);
    }

    render() {

        const { drawerOpen, drawerData, toggleDrawer, editions, getDrawerData, getEditions, onEditionChange } = this.props;

        return (
            <LeftNav
                docked={ false }
                onRequestChange={ toggleDrawer }
                open={ drawerOpen }
                >
                <EditionSelector editions={ editions } onEditionChange={ onEditionChange } selected={ drawerData.ed } />
                <AppDrawerMenu handleClose={ toggleDrawer } drawerData={ drawerData } />
            </LeftNav>
        );
    }
};
