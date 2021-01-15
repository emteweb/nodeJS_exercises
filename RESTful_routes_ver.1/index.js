const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true })) // for parsing data we send via POST request
app.use(express.json()) // built-in middleware function for parsing application/json
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

const comments = [
    {
        username: 'Todd',
        comment: 'This is the first comment'
    },
    {
        username: 'Adam',
        comment: 'This is the second comment'
    },
    {
        username: 'Alison',
        comment: 'This is the third comment'
    },
    {
        username: 'David',
        comment: 'This is the fourth comment'
    }
]


app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments});
})















app.listen(3000, ()=>{
    console.log('Listening on port 3000.')
})
