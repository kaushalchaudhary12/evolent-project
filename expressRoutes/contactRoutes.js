// contactRoutes.js

var express = require('express');
var contactRoutes = express.Router();

// Require Item model in our routes module
var Contact = require('../models/Contact');

// Defined store route
contactRoutes.route('/add').post(function (req, res) {
  var contact = new Contact(req.body);
  contact.save()
    .then(item => {
    res.status(200).json({'contact': 'Contact added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
contactRoutes.route('/').get(function (req, res) {
  Contact.find(function (err, contacts){
    if(err){
      console.log(err);
    }
    else {
      res.json(contacts);
    }
  });
});

// Defined edit route
contactRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Contact.findById(id, function (err, contact){
      res.json(contact);
  });
});

//  Defined update route
contactRoutes.route('/update/:id').post(function (req, res) {
  Contact.findById(req.params.id, function(err, contact) {
    if (!contact)
      return next(new Error('Could not load Document'));
    else {
      contact.firstName = req.body.firstName;
      contact.lastName = req.body.lastName;
      contact.email = req.body.email;
      contact.phone = req.body.phone;
      contact.status = req.body.status;

      contact.save().then(contact => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
contactRoutes.route('/delete/:id').get(function (req, res) {
  Contact.findByIdAndRemove({_id: req.params.id}, function(err, contact){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = contactRoutes;
