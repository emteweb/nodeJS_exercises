const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true })) // for parsing data we send via POST request
app.use(express.json()) // built-in middleware function for parsing application/json

app.get('/main', (req, res) => {
    res.send('GET /main RESPONSE')
})
app.post('/main', (req, res) => {

    console.log(req.body)
    const {meat, quantity} = req.body;
    console.log(`Here are your ${quantity} ${meat} tacos`);
    res.send('POST /main RESPONSE')
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000!')
})