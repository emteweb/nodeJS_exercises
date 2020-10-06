const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/camps", function(req, res){
    const camps = [
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Granite Hill ", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Black Mountain", image: "https://images.pexels.com/photos/2496880/pexels-photo-2496880.jpeg?auto=compress&cs=tinysrgb&h=350"}
    ]
        res.render("camps", {camps: camps});
    });

app.listen(process.env.PORT || 3000, () => console.log('YelpCamp listening on port 3000!'));