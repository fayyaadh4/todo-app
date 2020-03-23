const User = require('../models/user.model');
const mongoose = require('mongoose');

//function which creates a to do item by taking in the req.body as the value
exports.create = function(req, res) {
    let userModel = new User({    
        //username: req.user,
        //_id: req.user,
        toDo : req.body.toDo
    });
    userModel.save(function(err, users) {
        if(err) {
            console.log(err);
            res
            .status(500)
            .send({message: "Some error occurred while creating the to do."});
        } else {
            console.log(users);
            res.send("To do has been added.")
        }
    });
};

//finds all the to do's that already exist
exports.findAll = function(req, res) {
    User.find(function(err, user) {
        if (err) {
            console.log(err);
            res
            .status(500)
            .send({message: "Some error occurred while retrieving user"})
        }
        res.send(user);
    })
}

//deletes specific to do item by id number
exports.deleteById = function(req, res) {
    User.findOneAndRemove({_id: req.params._id}, function(err, user) {
        if(err) {
            console.log("Error: To do item not removed." + err);
            res.send("Error: To do item not removed." + err);
        }
        res.send("To do item removed.")
    })
}