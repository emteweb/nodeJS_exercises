var express = require("express");
var app = express();

app.use(express.static("public")); // used to tell EXPRESS to serve the content of "Public" directory
app.set("view engine", "ejs"); // to tell EXPRESS to use ejs files without having to type ext in render function

app.get("/", function(req,res){
    res.render("home")
})

app.get("/youareon/:subpage", function(req,res){
    var subpage = req.params.subpage;
    res.render("subpage", {subPageVar: subpage}); // in render we pass an JS Object which is executed in .ejs file 
})

app.get("/posts", function(req,res){
    var posts = [
        {title: "Post1", author: "John"},
        {title: "Post2", author: "Mary"},
        {title: "Post3", author: "Michael"},
    ];

    res.render("posts", {posts: posts});
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));