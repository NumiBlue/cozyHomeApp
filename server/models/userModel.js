const mongoose = require ('mongoose');

//Define user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
});

//create model from schema
const User = mongoose.model( 'User', userSchema);

module.exports = User;