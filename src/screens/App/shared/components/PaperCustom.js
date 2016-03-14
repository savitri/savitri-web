import Paper from 'material-ui/lib/paper';
import React from 'react';

import Breadcrumbs from './Breadcrumbs';

const styles = {
    paper: {
        padding: 20
    }
};


export default function PaperCustom(props) {  

    const { breadcrumbs, children } = props;

    return (
        <Paper style={ styles.paper } >
            { breadcrumbs ? <Breadcrumbs breadcrumbs={ breadcrumbs } /> : null }
            { children }
        </Paper>
    );
}

PaperCustom.propTypes = {
    breadcrumbs: React.PropTypes.array,
    children: React.PropTypes.node
};
