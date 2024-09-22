const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');

//Middleware
app.use(express.json());

//Use Routes
app.use('/api/users', userRoutes);


// Connect to the database and start the server using promises
connectDB().then(() => {
    // Start the server only after the database is connected
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}).catch((error) => {
    // Handle any errors in connecting to the database
    console.error('Failed to connect to the database', error);
    process.exit(1);  // Exit if there is a failure
});