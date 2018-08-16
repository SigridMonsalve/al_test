<template>
  <div class="daily">
    <h1>This is a daily page</h1>
  </div>
</template>

<script>
  const axios = require('axios');

  // Make a request for a user with a given ID
  axios.get('http://localhost:3000/btc-hourly')
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
  name: 'daily',
}
</script>
