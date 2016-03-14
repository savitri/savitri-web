/* eslint-disable strict */
'use strict';

exports.register = (server, options, next) => {

    const template = options.template;
    const context = options.params;

    server.route({
        path: '/{path*}',
        method: 'GET',
        handler: (request, reply) => {

            return reply.view(template, context);
        }
    });

    next();
};


exports.register.attributes = {
    name: 'templateServer',
    dependencies: ['vision']
};
