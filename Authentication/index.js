const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./Models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to the database')
    })
    .catch(err => {
        console.log('Database connection failed');
        console.log(err)
    });

app.set('view engine', 'ejs');
app.set('Views', 'Views');
app.use(express.urlencoded({extended: true}));
app.use(session({secret: 'notagoodsecret'}));

app.get('/', (req,res)=>{
    res.send('THIS IS THE HOME PAGE!');
})

app.get('/login', (req,res)=> {
    res.render('login');
})

app.post('/login', async (req,res)=> {
    //res.send(req.body);
    const{username,password} = req.body;
    const user = await User.findOne({username});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword){
        req.session.user_id = user._id;
        res.send("You logged in!")
    } else {
        res.send("Try again!")
    }
})

app.get('/register', (req,res)=> {
    res.render('register');
})
app.post('/register',async (req,res)=>{
    //res.send(req.body);
    const{username,password} = req.body;
    const hash = await bcrypt.hash(password,12);
    //res.send(hash);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
});

app.post('/logout', (req,res)=> {
    //req.session.user_id = null; //or
    req.session.destroy();
    res.redirect('/login');
})

app.get('/secret', (req,res)=>{
    if(!req.session.user_id){
        return res.redirect('/login')
    } 
        res.render('secret')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
});