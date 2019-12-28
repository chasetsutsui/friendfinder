const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false})

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT);
})