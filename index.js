'use strict';

let Hapi = require('hapi');
let React = require('react');

let server = new Hapi.Server({
  connections: {
    router: {
      isCaseSensitive: false,
      stripTrailingSlash: true
    }
  }
});

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 9999
});

server.views({
  path: 'views',
  engines: {
    js: require('hapi-react-views')
  },
  relativeTo: __dirname,
  compileOptions: {
    'node-jsx': {
      harmony: true,
      extension: '.js'
    },
    'renderMethod': 'renderToString'
  }
});

server.route([{
  path: '/',
  method: 'GET',
  handler: function(request, reply) {
    return reply.view('home');
  }
}, {
  path: '/_/{param*}',
  method: 'GET',
  handler: {
    directory: {
      path: 'public'
    }
  }
}]);

server.start(function() {
  console.log('server started at: ' + server.info.uri);
});
