
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


 var router = require("./controllers/burgers_controller");

 var app = express();

 var PORT = process.env.PORT || 8080;

//app.use(express.static(process.cwd() + '/public'));
app.use(express.static('public'));

 app.use(bodyParser.urlencoded({ extended: false }));

 app.use(methodOverride("_method"));
 

 app.engine('handlebars', exphbs({defaultlayout: 'main'}));
 app.set('view engine', 'handlebars');




 app.use("/", router);


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});