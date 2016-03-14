/* eslint-disable strict */
'use strict';

exports.register = (server, options, next) => {

    server.ext('onRequest', (request, reply) => {

        const req = request.raw.req;

        GLOBAL.navigator = {
            userAgent: req.headers['user-agent']
        };

        reply.continue();
    });

    next();
};


exports.register.attributes = {
    name: 'userAgent'
};
