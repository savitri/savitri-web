import React from 'react';

const styles = {
    self: {
        margin: 24
        // marginTop: 60
    }
};

export default function Layout({ children }) {

    return (
        <div className="container">
            <div style={ styles.self }>
                { children }
            </div>
        </div>
    );
};
