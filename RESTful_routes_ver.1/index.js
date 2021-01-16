const express = require('express');
const app = express();
const path = require('path');
const {v4: uuidv4} = require('uuid'); // for generating unique IDs
uuidv4();
const methodOverride = require('method-override'); // to make other types of request possible from the browser

app.use(express.urlencoded({ extended: true })) // for parsing data we send via POST request
app.use(express.json()) // built-in middleware function for parsing application/json
app.use(methodOverride('_method'));
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'This is the first comment'
    },
    {
        id: uuidv4(),
        username: 'Adam',
        comment: 'This is the second comment'
    },
    {
        id: uuidv4(),
        username: 'Alison',
        comment: 'This is the third comment'
    },
    {
        id: uuidv4(),
        username: 'David',
        comment: 'This is the fourth comment'
    }
]


app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments});
})
app.get('/comments/new', (req,res)=>{
    res.render('comments/new');
})
app.post('/comments/', (req,res)=>{
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuidv4()});
    res.redirect("/comments");
})
app.get('/comments/:id', (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id); // we use parseInt because from params we get a string
    res.render('comments/show', {comment});
})
app.get('/comments/:id/edit', (req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

app.patch('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')    
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000.')
})
