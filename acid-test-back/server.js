const server = require('http').createServer();
const url = require('url');

const init = (route) => {
  routeHandler = (req, resp) => {
    const path = url.parse(req.url).pathname;
    console.log('Got request', route);
    route(path, resp);
  }

  server.on('request', routeHandler).listen(3000);
  console.log('Servidor inicializado');
}

exports.init = init;