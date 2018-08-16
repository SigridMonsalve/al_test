// const http = require('http');
// const redis = require('redis');
// const client = redis.createClient('redis://h:pc044cddeae18d5ac0d7052e3809f03cb85ded7a211126d51c73527cd78c2a4f8@ec2-18-208-73-222.compute-1.amazonaws.com:13309');

// const hostname = '127.0.0.1';
// const port = 3000;
// const apiKey = "H6OM2NQL7UJ7X468";

// client.on('connect', () => {
//   console.log('Redis client connected');
// });

// client.on('error', (err) => {
//   console.log('Something went wrong ' + err);
// });

// client.set('my test key', 'my test value', redis.print);
// client.get('my test key', (error, result) => {
//   if (error) {
//     console.log(error);
//     throw error;
//   }
//   console.log('GET result ->' + result);
// });

// const https = require("https");
// const urlHourlyBTC =
//   `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=CLP&apikey=${apiKey}`;
// const urlHourlyETH =
//   `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=ETH&market=CLP&apikey=${apiKey}`;
// const urlMonthlyBTC =
//   `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CLP&apikey=${apiKey}`;
// const urlMonthlyETH =
//   `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=ETH&market=CLP&apikey=${apiKey}`;

// let body="";
// let hours = []

// https.get(urlHourlyBTC, res => {
//   res.setEncoding("utf8");
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     if (body['Meta Data']) {
//       let hour = '';
//       let i = 0;
//       for (let timestamp in body['Time Series (Digital Currency Intraday)']){
//         let value = body['Time Series (Digital Currency Intraday)'][timestamp]["1a. price (CLP)"];
//         console.log(hour, i, hours ,timestamp)
//         if (timestamp.slice(11,13) === hour) {
//           if (value <= hours[i-1].min) {
//             hours[i-1].min = value;
//           } else if (value >= hours[i-1].min){
//             hours[i-1].max = value;
//           }
//         } else {
//           if (i+1 === 25) {
//             return
//           } else {
//             hour = timestamp.slice(11,13)
//             hours.push({
//               min: value,
//               max: value,
//               hour
//             })
//             i++;
//           }
//         }
//       }
//     }
//   });
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Worlsdfd\n', body, 'body');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });