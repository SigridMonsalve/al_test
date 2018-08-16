<template>
  <div class="monthly">
    <h1>This is an monthly page</h1>
    <div id="chart_div"></div>
  </div>
</template>

<script>
  import axios from 'axios';

  axios.get('http://localhost:3000/btc-monthly')
    .then(function (response) {
      // handle success
      console.log(response);
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Min');
      let rows = response.map((item, index) => [item[index].month, item[index].min])
      data.addRows(rows);

      var options = {
        hAxis: {
          title: 'Month'
        },
        vAxis: {
          title: 'Price'
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  // Make a request for a user with a given ID
  axios.get('http://localhost:3000/eth-monthly')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  export default {
  name: 'monthly',
}
</script>

