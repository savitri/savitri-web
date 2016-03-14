import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';

import { getReadUrl } from '../../../config/endpoints';

// const SelectableList = SelectableContainerEnhance(List);

const styles = {
    primaryText: {
        fontSize: '85%',
        color: 'grey'
    },
    secondaryText: {
        fontSize: '100%',
        color: 'rgba(0, 0, 0, 0.870588)'
    }
};


// const READ_ENDPOINT = '/read';


// export default function AppDrawerMenu({ parts, handleClose }) {

//     let menuItems = [];

//     if (parts) {
//         parts.forEach((part) => {

//             const books = part.books.map((book) => {

//                 const cantos = book.cantos.map((canto) => {

//                     const sections = canto.sections.map((section) => {

//                         const url = `${ READ_ENDPOINT }/${ book.id }/${ canto.id }/${ section.id }`;
//                         return (
//                             <ListItem
//                                 containerElement={ <Link to={ url } /> }
//                                 key={ section.id }
//                                 onTouchTap={ handleClose }
//                                 primaryText={ <div><small>Section { section.id } ({ section.run })</small></div> }
//                             />
//                         );
//                     });

//                     return (
//                         <ListItem
//                             key={ canto.id }
//                             nestedItems={ sections }
//                             primaryText={ <div style={ styles.primaryText }>{ canto.n }</div> }
//                             primaryTogglesNestedList
//                             secondaryText={ <div style={ styles.secondaryText }>{ canto.t }</div> }
//                         />
//                     );
//                 });

//                 return (
//                     <ListItem
//                         key={ book.id }
//                         nestedItems={ cantos }
//                         primaryText={ <div style={ styles.primaryText }>{ book.n }</div> }
//                         primaryTogglesNestedList
//                         secondaryText={ <div style={ styles.secondaryText }>{ book.t }</div> }
//                     />
//                 );
//             });

//             menuItems = menuItems.concat(books);
//         });
//     }

//     return <List>{ menuItems }</List>;
// };

export default class AppDrawerMenu extends Component {
    shouldComponentUpdate(nextProps) {

        return (nextProps.drawerData.ed !== this.props.drawerData.ed);
    }

    render() {

        const { drawerData, handleClose } = this.props;

        // console.log(drawerData);
        const parts = drawerData.parts;

        let menuItems = [];

        if (parts) {
            parts.forEach((part) => {

                const books = part.books.map((book) => {

                    const cantos = book.cantos.map((canto) => {

                        const sections = canto.sections.map((section) => {

                            const url = getReadUrl(book.id, canto.id, section.id, drawerData.ed);
                            return (
                                <ListItem
                                    containerElement={ <Link to={ url } /> }
                                    key={ section.id }
                                    onTouchTap={ handleClose }
                                    primaryText={ <div><small>Section { section.id } ({ section.run }) </small></div> }
                                    />
                            );
                        });

                        return (
                            <ListItem
                                key={ canto.n }
                                nestedItems={ sections }
                                primaryText={ <div style={ styles.primaryText }>{ canto.n }</div> }
                                primaryTogglesNestedList
                                secondaryText={ <div style={ styles.secondaryText }>{ canto.t }</div> }
                                />
                        );
                    });

                    return (
                        <ListItem
                            key={ book.n }
                            nestedItems={ cantos }
                            primaryText={ <div style={ styles.primaryText }>{ book.n }</div> }
                            primaryTogglesNestedList
                            secondaryText={ <div style={ styles.secondaryText }>{ book.t }</div> }
                            />
                    );
                });

                menuItems = menuItems.concat(books);
            });
        }

        return <List>{ menuItems }</List>;
    }
}