const api = require('./api');

const route = (path, response) => {
  console.log("Nueva petición recibida: " + path, response);
  switch (path) {
    case '/btc-hourly':
      api.getHourly("BTC", response)
      break;
    case '/btc-monthly':
      api.getHourly("BTC", response)
      break;
    case '/eth-hourly':
      api.getHourly("ETH", response)
      break;
    case '/eth-monthly':
      api.getHourly("ETH", response)
      break;
    default:
      const unknown = { error: 'Path not found'}
      response.writeHead(200, {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      response.end(JSON.stringify(unknown));
      break;
  }
}

exports.route = route;