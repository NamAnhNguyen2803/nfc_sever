const express = require('express');
const app  = express();
const cors = require('cors');
const PORT = 3030;

app.use(cors());

//body-parser configuration
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routing
var route = require('./route');

route(app);

// listening
app.listen(PORT, ()=>{
    console.log('example of something I\'m tooooo lazy to write');
})
