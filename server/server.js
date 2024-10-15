const express = require('express');
const connectDB = require('./config/db'); // Ensure this path is correct
const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Use Routes
app.use('/api/users', userRoutes);

// Connect to database and start server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
});
