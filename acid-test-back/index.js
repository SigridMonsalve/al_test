const server = require('./server');
// import {init as dbInit} from './redis';
const router = require('./router');

server.init(router.route);
