
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());




app.listen(PORT, () => {
    console.log('Server is starting at PORT ${PORT}');
});