const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('GET /places');
}); // <-- Added closing parenthesis

module.exports = router;
