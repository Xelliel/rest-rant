require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Load environment variables from .env file
require('dotenv').config();

// Set up JSX view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Define routes
app.use('/places', require('./controllers/places'));

// Define a route for the home page
app.get('/', (req, res) => {
    res.render('Home');
});

// Define a 404 route
app.get('*', (req, res) => {
    res.render('error404')
});



// Start the server
const PORT = process.env.PORT || 3000; // Use process.env.PORT if defined, otherwise use port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
