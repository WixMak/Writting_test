const { name } = require("ejs");
const express = require("express");
const passport = require("passport");
const flash = require('express-flash')
const session = require('express-session')
const LocalStrategy = require("passport-local").Strategy

var app = express();

passport.use(new LocalStrategy({usernameField:'lname'
,passwordField:'pw', passReqToCallback: true},

function(req, lname, pw, done){

    if(lname === user.username && pw === user.pwd){
        
        return done(null,lname)

    }else{

        return done(null,false)

    }

},

passport.serializeUser(function(user, done){

        done(null,user)

}),

passport.deserializeUser(function(user,done){
   
        done(null,user)
    
    
})

))

app.use(express.urlencoded({extended: false}));

app.use(flash());

app.use(session({

    secret: 'fdsfsdfdsfsd',

    resave:'false',

    saveUninitialized:'false'  

}))

app.use(passport.initialize())

app.use(passport.session())

app.set('view engine', 'ejs')

const d = [];

const user = {id:01, username:'admin', pwd:'Admin&8181'}


app.get("/", function(req, res){

    res.send("Enter /hello, /sortnum, /login to check out the function");

});

app.get("/hello", function(req, res){

    res.send("<h1>Hello World</h1>");

});

app.get("/sortnum", function(req, res){
    
   res.render('sortnum')
  
   
   
});



app.post("/sortnum", function(req, res){

   d.push(req.body.num);

   d.sort(function(a,b){return a-b});

   console.log(d);

   res.send(d);

   
});


app.get("/login", function(req, res){

    res.render('login')

});

app.post("/login", passport.authenticate('local', {

    successRedirect:'/',

    failureRedirect: '/login'

}));


var server = app.listen(3000, function (){

    const port = 3000;

    const ip = "127.0.0.1"; 

    console.log(`Server is running at http://${ip}:${port}/`);

} ); 
