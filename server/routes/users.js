const router = require('express').Router();
const {createUser, logIn, checkToken} = require('../controllers/usersController');

router.post('/signup', createUser)

router.post('/signin', logIn)

router.get('/api/check-token', checkToken)

module.exports = router;