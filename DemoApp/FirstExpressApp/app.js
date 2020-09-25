var express = require("express");
var app = express();


app.get("/", function(req, res){
	res.send("Home page");
});

app.get("/Hello", function(req, res){
	res.send("Hi There!!!");
});

app.get("/bye", function(req, res){
	res.send("Goodbye!!!");
});

app.get("/dog", function(req, res){
	res.send("Bow wow");
});

app.get("/comments/:subpage", function(req, res){
	//console.log(req);
	//console.log(req.params.subpage);
	var input = req.params.subpage;
	res.send("Welcome to " + input + " comments page!");
});

app.get("/comments/:subpage/:id/:title", function(req, res){
	console.log(req.params);
	res.send("Welcome to some specific comment page!");
});

app.get("*", function(req, res){
	res.send("Catch all route");
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));