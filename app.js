// .json npm install note: if things go wack just do npm install of specific version
// nodemon package is addition to express that helps starts and saves every time file is changed
const express = require('express');
const chalk = require('chalk');                   // sets color on msgs to group together
const debug = require('debug')('app')            // pass in file or section of code that we are in
const morgan = require('morgan');
const path = require('path')

const PORT = process.env.PORT || 3000;        
const app = express();               

app.use(morgan('tiny'));            

app.use(express.static(path.join(__dirname, '/public/')));              

app.set('views', './src/views');             
app.set('view engine', 'ejs');       

// ---------------------
// app.get('/'  -- express will execute this function in the broswer
// send 2 variable 
// : request
// : response
//  app.get('/',(req, res)=>{ }npm )
// ---------------------

app.get('/', (req, res) => { 
 res.render('index', { title: 'MOM' });  
});

app.listen(PORT, () => {     
    debug(`listening on port ${chalk.green(PORT)}`);        // template string - debug only runs in debug mode
});  
