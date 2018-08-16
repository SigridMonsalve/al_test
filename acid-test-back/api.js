const https = require("https");

const apiKey = "H6OM2NQL7UJ7X468";
const baseUrl = "https://www.alphavantage.co/";
const endpointUrl = (interval, curr) => `${baseUrl}query?function=DIGITAL_CURRENCY_${interval}&symbol=${curr}&market=CLP&apikey=${apiKey}`;


const getHourly = (curr, response) => {
  let body="";
  response.writeHead(200, {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  return https.get(endpointUrl("INTRADAY", curr), res => {
    res.setEncoding("utf8");
    res.on("data", data => {
      console.log(data)
      body += data
    });
    res.on("end", () => {
      const arrangedData = formatResponseDaily(JSON.parse(body)["Time Series (Digital Currency Intraday)"])
      response.end(JSON.stringify(arrangedData));
    });
    res.on("error", () => {
      getHourly(curr, response);
    })
  }, error => getHourly(curr, response));
}

const getMonthly = (curr, response) => {
  let body="";
  response.writeHead(200, {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  return https.get(endpointUrl("MONTHLY", curr), res => {
    res.setEncoding("utf8");
    res.on("data", data => {
      console.log(data)
      body += data
    });
    res.on("end", () => {
      const arrangedData = formatResponseMonthly(JSON.parse(body)["Time Series (Digital Currency Monthly)"])
      response.end(JSON.stringify(arrangedData));
    });
    res.on("error", () => {
      getMonthly(curr, response);
    })
  }, error => getMonthly(curr, response));
}

const formatResponseDaily = (data) => {
  let hour = '';
  let i = 0;
  let hours = {}
  for (let timestamp in data){
    let value = data[timestamp]["1a. price (CLP)"];
    if (timestamp.slice(11,13) === hour) {
      console.log(hours, i, hour)
      if (value <= hours[i].min) {
        hours[i].min = value;
      } else if (value >= hours[i].max){
        hours[i].max = value;
      }
    } else {
      if (i+1 === 25) {
        return hours
      } else {
        hour = timestamp.slice(11,13)
        hours[i+1] = {
          min: value,
          max: value,
          hour
        }
        i++;
      }
    }
  }
}

const formatResponseMonthly = (data) => {
  let month = '';
  let i = 0;
  let months = {}
  for (let timestamp in data){
    let max = data[timestamp]["2a. high (CLP)"];
    let min = data[timestamp]["3a. low (CLP)"];
    if (timestamp.slice(5,7) === month) {
      months[i].min = min;
      months[i].max = max;
    } else {
      if (i+1 === 13) {
        return months
      } else {
        month = timestamp.slice(5,7)
        months[i+1] = {
          min: min,
          max: max,
          month
        }
        i++;
      }
    }
  }
}

exports.getHourly = getHourly;
exports.getMonthly = getMonthly;