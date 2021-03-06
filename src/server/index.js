/* eslint-disable strict */
'use strict';

const Handlebars = require('handlebars');
const Hapi = require('hapi');
const HapiWebpackDevMiddleware = require('hapi-webpack-dev-middleware');
const HapiWebpackHotMiddleware = require('hapi-webpack-hot-middleware');
const Inert = require('inert');
const StaticFileServer = require('./plugins/file-server');
const StaticTemplateServer = require('./plugins/template-server');
const Vision = require('vision');

let WebpackConfig;

if (process.env.NODE_ENV === 'production') {
    WebpackConfig = require('../../webpack.config.prod.js');
} else {
    WebpackConfig = require('../../webpack.config.dev.js');
}

const server = new Hapi.Server();
server.connection({
    port: 3000
});


const plugins = [
    Vision,
    Inert,
    StaticFileServer,
    {
        register: HapiWebpackDevMiddleware,
        options: {
            config: WebpackConfig,
            options: {
                noInfo: true,
                publicPath: WebpackConfig.output.publicPath
            }
        }
    },
    HapiWebpackHotMiddleware,
    {
        register: StaticTemplateServer,
        options: {
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

    console.log('Development server running at', server.info.uri);
});
