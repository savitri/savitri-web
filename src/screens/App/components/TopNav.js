import AppBar from 'material-ui/lib/app-bar';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { amber500 } from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

import FlatButtonLinks from './FlatButtonLinks';


const styles = {
    self: {
        backgroundColor: amber500
        // position: 'fixed',
        // top: 0
    },
    appTitle: {
        color: '#fff',
        textDecoration: 'none'
    }
};

const menuItems = [
    {
        label: 'Read',
        url: '/read'
    },
    {
        label: 'Savitri Cultural',
        url: '/blogs/savitri-cultural/posts'
    },
    {
        label: 'Journals',
        children: [
            {
                label: 'Savitri Cultural',
                url: '/blogs/savitri-cultural/posts'
            },
            {
                label: 'The Light of the Supreme',
                url: '/blogs/light-of-supreme/posts'
            },
            {
                label: 'Bhawani Bharati',
                url: '/blogs/bhawani-bharati/posts'
            }
        ]
    },
    {
        label: 'About',
        url: '/about'
    }
];

export default function TopNav({ toggleDrawer }) {

    const menu = menuItems.map((menuItem, menuItemIndex) => {

        let component;
        if (!menuItem.children) {
            component = <MenuItem primaryText={ menuItem.label } containerElement={ <Link to={ menuItem.url } /> } key={ menuItemIndex } />;
        } else {
            const children = menuItem.children.map((childItem, childItemIndex) => {

                return <MenuItem primaryText={ childItem.label } containerElement={ <Link to={ childItem.url } /> } key={ childItemIndex } />;
            });
            component = <MenuItem primaryText={ menuItem.label } menuItems={ children } key={ menuItemIndex } />;
        }

        return component;
    });

    return (
        <AppBar
            iconElementRight={
                <FlatButtonLinks menuItems={ menuItems } />
            }
            // iconElementRight={
            //     <IconMenu iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }>
            //         { menu }
            //     </IconMenu>
            // }
            onLeftIconButtonTouchTap={ toggleDrawer }
            style={ styles.self }
            title={
                <Link style={ styles.appTitle } to="/">{ 'Savitri' }</Link>
            }
            />
    );
};

TopNav.propTypes = {
    toggleDrawer: PropTypes.func.isRequired
};
