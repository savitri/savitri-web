import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import FlatButton from 'material-ui/lib/flat-button';
import React from 'react';
import { amber50 } from 'material-ui/lib/styles/colors';

const styles = {
    breadcrumb: {
        textAlign: 'left',
        backgroundColor: amber50,
        marginBottom: 40
    }
};


export default function Breadcrumbs(props) {

    const breadcrumbLength = props.breadcrumbs.length;

    return (
        <div style={ styles.breadcrumb }>
            {
                props.breadcrumbs.map((crumb, i) => {

                    const icon = i < breadcrumbLength - 1 ? <ChevronRight /> : null;
                    const isPrimary = i === breadcrumbLength - 1;
                    return (
                        <span key={ i }>
                            { <FlatButton icon={ icon } label={ crumb.label } disabled={ isPrimary } /> }
                        </span>
                    );
                })
            }
        </div>
    );
}

Breadcrumbs.propTypes = {
    breadcrumbs: React.PropTypes.array
};
