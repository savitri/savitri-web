import React, { Component, PropTypes } from 'react';
// import ThemeManager from 'material-ui/lib/styles/theme-manager';
// import themeDecorator from 'material-ui/lib/styles/theme-decorator';


import AppDrawer from './AppDrawer';
import Layout from './Layout';
import Refresh from './Refresh';
import TopNav from './TopNav';
import { getEditionsUrl, getEditionUrl } from '../../../config/endpoints';


export default class App extends Component {
    constructor(props) {

        super(props);
        this.handleEditionChange = this.handleEditionChange.bind(this);
    }

    componentDidMount() {

        this.props.actions.getDrawerData(getEditionUrl());
        this.props.actions.getEditions(getEditionsUrl());
    }

    handleEditionChange(event, index, year) {

        this.props.actions.getDrawerData(getEditionUrl(year));
    }

    render() {

        // console.log(this.props);

        const { app, actions, toc, editions, progress, appDrawer } = this.props;

        // const appDrawerActions = {
        //     onAppDrawerMount: this.handleGetAppDrawerData,
        //     onEditionSelectorMount: this.handleGetEditionSelectorData
        // };

        return (
            <div>
                <TopNav toggleDrawer={ actions.toggleDrawer } />
                <AppDrawer
                    drawerData={ toc }
                    drawerOpen={ appDrawer.drawerOpen }
                    editions={ editions }
                    toggleDrawer={ actions.toggleDrawer }
                    onEditionChange={ this.handleEditionChange }
                    />
                <Refresh loading={ progress.loading } />
                <Layout>{ this.props.children }</Layout>
            </div>
        );
    }
}


App.propTypes = {
    actions: PropTypes.object.isRequired,
    // app: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};


// const theme = {
//     fontFamily: 'Helvetica'
// };


// let userAgent;

// if (typeof navigator === 'undefined') {
//     userAgent = 'all';
// }
// else {
//     userAgent = navigator.userAgent;
// }



// export default connect(mapStateToProps)(themeDecorator(ThemeManager.getMuiTheme(theme, { userAgent }))(App));
