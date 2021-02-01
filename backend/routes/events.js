var express = require('express');
var router = express.Router();
var Event =  require('../models/events');
var ObjectID = require('mongoose').Types.ObjectId

/* GET users listing. */
router.get('/', function(req, res, next) {
    Event.find((err, doc) => {
        if(!err) {
            return res.status(201).json(doc)
        }
        else{
            console.log('Error in Retriving Events: '+JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', function(req, res, next){
    var event = new Event({
        name: req.body.name,
        title: req.body.title,
        venue: req.body.venue,
        description: req.body.description,
        creation_date: Date.now()
    });
    event.save((err,doc) => {
        if (!err) {
            return res.status(201).json(doc);
            }
        else{
            console.log('Error in Retriving Events: '+JSON.stringify(err, undefined, 2));
        }
    });
});
router.get('/:id', function(req, res, next) {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No object is found with given id: ${req.params.id}` );
    }
    Event.findById(req.params.id, (err, doc) => {
        if(!err){
            return res.status(201).json(doc)
        }
        else{
            console.log('Error in Retriving Events: '+JSON.stringify(err, undefined, 2));
        }
    });
});




router.put('/:id', function(req, res, next){
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No object is found with given id: ${req.params.id}` );
    }

    var event = {
        name: req.body.name,
        title: req.body.title,
        venue: req.body.venue,
        description: req.body.description,
        creation_date: Date.now()
    };

    Event.findByIdAndUpdate(req.params.id, {$set: event}, {new: true}, (err, doc) => {
        if(!err){
            return res.status(201).json(doc)
        }
        else{
            console.log('Error in Retriving Events: '+JSON.stringify(err, undefined, 2));
        }
    })
});

router.delete('/:id', function(req, res, next){ 
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No object is found with given id: ${req.params.id}` );
    }
    Event.findByIdAndRemove(req.params.id, (err, doc) =>{
        if(!err){
            return res.status(201).json(doc);
            console.log('Deleted.');
        }
        else{
            console.log('Error in Retriving Events: '+JSON.stringify(err, undefined, 2));
        }
    })
})


module.exports = router;