var express = require("express");
var app = express();

// defining animal routes

app.get("/", function(req,res){
    res.send("Welcome to my assignment");
})

app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal.toLowerCase();
    /* if(animal === "pig"){
        var sound = "Oink";
        }
        else if (animal === "cow"){
        var sound = "Moo";
        }
        else if (animal === "dog"){
            var sound = "Woof Woof";
            } */
    var sounds = {
        pig: "Oink",
        cow: "Mooo",
        dog: "Woof Woof"
    }
    var sound = sounds[animal];

    res.send("The " + animal + " says " + sound);
});

// repeating words a number of times

app.get("/repeat/:word/:id", function(req,res){

    var word = req.params.word;
    var num = Number(req.params.id);
    var message= "";

    for(var i = 0; i < num; i++){
        message += word + " ";
    } 
    res.send(message);
});

app.get("*", function(req,res){
    res.send("Sorry, page not found");
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));