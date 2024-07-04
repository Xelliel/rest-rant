const router = require('express').Router();
const db = require('../models');

books.get('/seed', (req, res) => {
  Book.insertMany([{
      "title": "The Shinobi Initiative",
      "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
      "year": 2014,
      "quantity": 10,
      "imageURL": "https://imgur.com/LEqsHy5.jpeg"
    },
    {
      "title": "Tess the Wonder Dog",
      "description": "The tale of a dog who gets super powers",
      "year": 2007,
      "quantity": 3,
      "imageURL": "https://imgur.com/cEJmGKV.jpg"
    },
    {
      "title": "The Annals of Arathrae",
      "description": "This anthology tells the intertwined narratives of six fairy tales.",
      "year": 2016,
      "quantity": 8,
      "imageURL": "https://imgur.com/VGyUtrr.jpeg"
    },
    {
      "title": "Wâˆ€RP",
      "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
      "year": 2010,
      "quantity": 4,
      "imageURL": "https://imgur.com/qYLKtPH.jpeg"
    }])
      .then(res.status(200).json({
          message: 'Seed successful'
      }))
      .catch(res.status(400).json({
          message: 'Seed unsuccessful'
      }))
})



// Route to get all places
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
});

// Route to get a specific place by ID
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});

// Route to create a new place
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places');
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});

// Route to add a comment to a specific place
router.post('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
});

// Other routes for editing, updating, and deleting places
// ...

module.exports = router;
