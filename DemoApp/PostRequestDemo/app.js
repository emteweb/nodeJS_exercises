var express = require("express");
var app = express();

// because EXPRESS doesn't automatically creates JS object when request is done (e.g. req.body), we have to:
// npm install body-parser --save
// include the package in app.js with the following commands:
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Alan", "Brian", "Celine", "David", "Emily"];

app.get("/", function(req,res){
    res.render("home");
});

app.post("/addFriend", function(req,res){
    //console.log(req.body.newfriend);
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req,res){
    //var friends = ["Alan", "Brian", "Celine", "David", "Emily"];
    res.render("friends", {friends: friends});
});


app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));