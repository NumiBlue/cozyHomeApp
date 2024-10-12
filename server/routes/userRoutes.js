const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for Users
router.get('/', userController.getAllUsers); // Get all users
router.get('/:id', userController.getUserById); // Get user by ID
router.post('/', userController.createUser); // Create a new user

module.exports = router;
