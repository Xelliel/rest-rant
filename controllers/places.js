const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('GET /places/index');
}); // <-- Added closing parenthesis

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/steakcafe.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/firecafe.jpg'
      }]
      
    res.render('places/index')
  })
  

module.exports = router;
