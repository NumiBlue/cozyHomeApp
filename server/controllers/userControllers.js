const User = require('../models/userModel');

//Fetch all users
exports.getAllUsers = (req,res) => {
    const users = [
        {id: 1, name: 'Alice' },
        {id: 2, name: 'Bill'}
    ];
    res.json(users);
};

//Fetch a user by id
exports.getUserById = (req,res) => {
    const userId = req.params.id;
    const user = { id: userId, name: 'Alice' }; // Example 
    res.json(user);
};

//Create a new user
exports.createUser = (req,res) => {
    const newUser = req.body;
    res.status(201).json(newUser);
};