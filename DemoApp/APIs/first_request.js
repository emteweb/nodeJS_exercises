// request package is now deprecated
//var request = require("request");

/* request("https://jsonplaceholder.typicode.com/todos", function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log(body);
    }
}); */

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
    console.log(response.data.title);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  // 2nd possibility:

  // A) with EXPRESS:
  /* app.get('/', async (req,res,next) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      } catch(err){
          console.log(err);
      }
  }); */
  
  // B) in the console

  (async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
      } catch(err){
          console.log(err);
      }
  })();

  (async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log(`${response.data.name} lives in ${response.data.address.city}`);
      } catch(err){
          console.log(err);
      }
  })();

  const rp = require('request-promise');
  rp('https://jsonplaceholder.typicode.com/users/2')
  .then((body) => {
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
  })
    .catch((err) => {
      console.log('Error: ', err)
    });
  