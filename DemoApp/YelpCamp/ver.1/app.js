const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const camps = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Granite Hill ", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Black Mountain", image: "https://images.pexels.com/photos/2496880/pexels-photo-2496880.jpeg?auto=compress&cs=tinysrgb&h=350"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/camps", function(req, res){
        res.render("camps", {camps: camps});
    });

app.get("/camps/new", function(req, res){
    res.render("newCamp");
});
    
app.post("/camps", function(req, res){
    // get data from form and add to camps array
    const name = req.body.newCamp;
    const image = req.body.newImage;
    const newCamp = {name: name, image: image};
    camps.push(newCamp);
    // redirect back to camps page
    res.redirect("/camps");
});



app.listen(process.env.PORT || 3000, () => console.log('YelpCamp listening on port 3000!'));