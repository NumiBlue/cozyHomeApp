const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');

//Middleware
app.use(express.json());

//Use Routes
app.use('/api/users', userRoutes);


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
