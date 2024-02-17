const router = require('express').Router();
const places = require('../models/places.js')



router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})





router.get('/', (req, res) => {
    res.send('GET /places/index');
}); //

router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.get('/:id', (req, res) => {
    res.render('places/show')
  })
  
  
  
 

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
  
  router.post('/', (req, res) => {
    router.post('/', (req, res) => {
        console.log(req.body)
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        places.push(req.body)
        res.redirect('/places')
      })
      
  

module.exports = router;
