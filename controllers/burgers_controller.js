var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");


router.get('/', function (req, res){
    res.redirect('/index');
});

router.get('/index', function (req, res){
    burgers.selectAll(function (data){
        var hdbsObject = { burgers: data};
        //console.log(hdbsObject);
        res.render('index', hdbsObject);
    });
});

router.post('/burgers/insertOne', function (req, res){
    burgers.insertOne(['burger_name','devoured'], [req.body.burger_name, false], function (){
        res.redirect('/index');
    });
});

router.put('/burgers/updateOne/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);
    burgers.updateOne({ devoured:req.body.devoured}, condition, function (){
        
        res.redirect('/index');
    });
});



module.exports = router;

