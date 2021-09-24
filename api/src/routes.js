const express = require('express');
const routes = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');

const GenderController = require('./controllers/GenderController.js');
const UserController = require('./controllers/UserController.js');

routes.get('/', function(req, res) {    
    res.send('Bee working');
  });

routes.get('/users', passport.authenticate("jwt", {session:false}), UserController.index);
routes.get('/getuserbyid/:id', passport.authenticate("jwt", {session:false}), UserController.getUserById);
routes.post('/users', UserController.create);
routes.post('/login', UserController.login);
routes.put('/updateUser/:id', passport.authenticate("jwt", {session:false}),  UserController.update);
routes.delete('/users/:id', passport.authenticate("jwt", {session:false}),  UserController.destroy),

routes.get('/genders', GenderController.index)
routes.get('/genders/:id', GenderController.getGenderById)


module.exports = routes;