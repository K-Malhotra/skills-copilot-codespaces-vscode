//create web server
var express = require('express');
var router = express.Router();

//create database connection
var db = require('../db');

//create a route for getting all comments
router.get('/', function(req, res, next) {
  db('comments').select().then(function(comments){
    res.json(comments);
  });
});

//create a route for posting a comment
router.post('/', function(req, res, next) {
  db('comments').insert(req.body).then(function(){
    res.json({success: true});
  });
});

//create a route for getting a single comment
router.get('/:id', function(req, res, next) {
  db('comments').select().where({id: req.params.id}).then(function(comments){
    res.json(comments[0]);
  });
});

//create a route for updating a comment
router.put('/:id', function(req, res, next) {
  db('comments').update(req.body).where({id: req.params.id}).then(function(){
    res.json({success: true});
  });
});

//create a route for deleting a comment
router.delete('/:id', function(req, res, next) {
  db('comments').del().where({id: req.params.id}).then(function(){
    res.json({success: true});
  });
});

module.exports = router;
