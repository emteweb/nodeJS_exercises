const express = require('express');
const app = express();
const request = require('request');
app.use(express.static("public"));
app.set("view engine", "ejs");
//const rp = require('request-promise');
//const axios = require('axios');

app.get("/", function(req,res){
    res.render("search");
})

app.get("/results", function(req,res){
    var searchedTitle = req.query.title;
    var url = "http://omdbapi.com/?s=" + searchedTitle + "&apikey=thewdb"
    request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
        const data = JSON.parse(body);
        //res.send(data['Search'][0]);
        res.render('results', {data: data});
    }
}); 
}); 


app.listen(process.env.PORT || 3000, () => console.log('Movie app listening on port 3000!'));