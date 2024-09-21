const mongoose = require('mongoose');

const connetDB = async => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            userNewUrlParser : true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error');
        process.exit(1);
    }
};

module.exports = connectDB;