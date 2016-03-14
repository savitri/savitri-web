import React from 'react';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import { amber500 } from 'material-ui/lib/styles/colors';

const style = {
    container: {
        position: 'relative'
    },
    refresh: {
        display: 'inline-block',
        position: 'relative'
    }
};

const RefreshIndicatorExampleLoading = ({ loading }) => {

    return (
        <div style={ style.container }>
            <RefreshIndicator
                left={ window.innerWidth / 2 - 25 }
                loadingColor={ amber500 }
                size={ 50 }
                top={ window.innerHeight / 2 - 100 }
                status={ loading ? 'loading' : 'hide' }
                style={ style.refresh }
                />
        </div>
    );
};

export default RefreshIndicatorExampleLoading;
