/* eslint-disable strict */
'use strict';

const Handlebars = require('handlebars');
const Hapi = require('hapi');
const HapiReduxRouter = require('hapi-redux-router');
const Inert = require('inert');
// const Redux = require('redux');
const StaticFileServer = require('./plugins/file-server');
const UserAgent = require('./plugins/user-agent');
const Vision = require('vision');
require('babel-polyfill');


const Routes = require('../config/routes').default;
// const appReducer = require('../screens/App/reducer').default;
// const counterReducer = require('../screens/Counter/reducer').default;
// const readReducer = require('../screens/Read/reducer').default;
// const bootstrapAction = require('../screens/Counter/actions').initCounter;
const combinedStore = require('../config/store').default;

// console.log(combinedStore);

const server = new Hapi.Server();
server.connection({
    port: 8080
});

console.log(process.env);


// const reducer = Redux.combineReducers({ counter: counterReducer, app: appReducer, read: readReducer });
// const store = Redux.createStore(reducer);


const plugins = [
    UserAgent,
    Vision,
    Inert,
    StaticFileServer,
    {
        register: HapiReduxRouter,
        options: {
            store: combinedStore(),
            // bootstrapAction,
            routes: Routes,
            template: 'index',
            params: {
                env: process.env.NODE_ENV
            }
        }
    }
];


server.register(plugins, (err) => {

    if (err){
        console.error(err);
    };
});


server.views({
    engines: { hbs: Handlebars }
});


server.start((err) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Production server running at', server.info.uri);
});
