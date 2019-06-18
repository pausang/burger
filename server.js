
var express = require('express');

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static('public'));


// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



 var router = require("./controllers/burgers_controller");


 app.use("/", router);
 


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});