const express = require('express');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Define routes
app.use('/places', require('./controllers/places'));

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});


app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

// Start the server
const PORT = process.env.PORT || 3000; // Use process.env.PORT if defined, otherwise use port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
