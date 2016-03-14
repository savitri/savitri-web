import FlatButton from 'material-ui/lib/flat-button';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import React from 'react';
import { Link } from 'react-router';

const styles = {
    appLinks: {
        marginTop: 8
    },
    topButtons: {
        color: '#fff'
    }
};


export default function FlatButtonLinks({ menuItems }) {

    return (
        <div style={ styles.appLinks }>
            {
                menuItems.map((menuItem, index) => {

                    let component;

                    if (!menuItem.children) {
                        component = <FlatButton
                            containerElement={ <Link to={ menuItem.url } /> }
                            key={ index }
                            label={ menuItem.label }
                            style={ styles.topButtons }
                            />;
                    } else {
                        // const childMenu = menuItem.children.map((childItem, childIndex) => {

                        //     return <MenuItem primaryText={ childItem.label } key={ childIndex } containerElement={ <Link to={ childItem.url } /> } />;
                        // });

                        // component = <Menu>{ childMenu }</Menu>;
                    }

                    return (
                        component
                    );
                })
            }
        </div>
    );
};
