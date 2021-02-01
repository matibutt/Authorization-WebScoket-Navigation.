var express = require('express');
var router = express.Router();
var User =  require('../models/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var ObjectID = require('mongoose').Types.ObjectId

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next){
  User.find((err,doc) => {
    if(!err) {
       return res.status(201).json(doc)
    }
    else{
        console.log('Error in Retriving Events: '+JSON.stringify(err, undefined, 2));
       }
  });
})

router.post('/register',  function(req,res,next){
  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_date: Date.now()
  });

  let promise = user.save();

  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message: 'Error registering user.'})
  })
})

router.post('/login', function(req, res, next){
  let promise = User.findOne({email: req.body.email}).exec();
  promise.then(function(doc){
    if(doc) {
      if (doc.$isValid(req.body.password)){
        //generate token here.
        let token = jwt.sign({username: doc.username}, 'secret', {expiresIn: '24h'});
        return res.status(200).json(token);

      }
      else{
        return res.status(501).json({message: 'Invalid credential.'})
      }
    }
    else {
      return res. status(501).json({message: 'Email is not found.'})
    }

  });
  promise.catch(function(err){
    return res.status(501).json({message: 'Some intenal Error'})
  })
})


router.get('/username', verifyToken, function(req,res,next){
  return res.status(200).json(decodedToken.username);
})


var decodedToken='';
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}
router.get('/logout',verifyToken , function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Success'});
})

router.delete('/:id', function(req, res, next){ 
  if(!ObjectID.isValid(req.params.id)){
      return res.status(400).send(`No object is found with given id: ${req.params.id}` );
  }
  User.findByIdAndRemove(req.params.id, (err, doc) =>{
      if(!err){
          return res.status(201).json(doc);
      }
      else{
          console.log('Error in Retriving Events: '+JSON.stringify(err, undefined, 2));
      }
  })
})


module.exports = router;