// .json npm install note: if things go wack just do npm install of specific version

// nodemon package is addition to express that helps starts and saves every time file is changed
const express = require('express');
const chalk = require('chalk');                   // sets color on msgs to group together
const debug = require('debug')('app')            // pass in file or section of code that we are in
const morgan = require('morgan');
const path = require('path')

const PORT = process.env.PORT || 3000;       // process.env is whats coming out of the environment, so by putting a different port it is testing if it will grab the env port or the variable one
const app = express();               //variable name 

app.use(morgan('tiny'));            // middleware; combind gives everything, tiny for less information ( goes back to connect get)

//-- how to serve html file to the browser: with static file; anything that is static or doesnt require express, 
// send back to the browser - do so by using another piece of middleware
app.use(express.static(path.join(__dirname, '/public/')));                     // need express as the actual express package; has helper function on it that 
     // __dirname is a variable that is bundled into node                       // that will set up middleware to handle static files -- tell where its going to pull those static files from; use node package called PATH; dont need to install, comes with node
    // (__dirname, -where its running from--

app.set('views', './src/views');              // allow variables to be set inside context of application  -- variable is being set as views, and its telling where views is 
app.set('view engine', 'ejs');       // tell express what the view engine is :   summary - express app is looking into src/views for templates associated with ejs and -- that is what its going to use to RENDER HTML --


// ---------------------
// app.get('/'  -- express will execute this function in the broswer
// send 2 variable 
// : request
// : response
//  app.get('/',(req, res)=>{ }npm )
// ---------------------

app.get('/', (req, res) => { 
 // From : -->   res.send('Hello from my app');  //response w/ msg
 /* To : -->  */ 
 res.render('index', { title: 'MOM' });  // which is referenceing to the ejs file : pass object into it which is <title>
});

app.listen(PORT, () => {      // callback after listening; skipped - go right into function
    debug(`listening on port ${chalk.green(PORT)}`); // template string - debug only runs in debug mode
}); // >DEBUG=*& node (or start) app.js to see results in console  IN CMD not Powershell -- debug wont spit stuff on console on default 

// npm install morgan - log web traffic 