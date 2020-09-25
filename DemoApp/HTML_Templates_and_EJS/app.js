var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.render("home.ejs")
})

app.get("/youareon/:subpage", function(req,res){
    var subpage = req.params.subpage;
    res.render("subpage.ejs", {subPageVar: subpage}); // in render we pass an JS Object which is executed in .ejs file 
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));