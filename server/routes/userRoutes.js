const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Define routes for Users
router.get = ('/', userController.getAllUsers);
router.get = ('/:id', userController.getUserById);
router.post = ('/', userController.createUser);

module.exports = router;