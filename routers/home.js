const express = require('express')

const router = express.Router();

router
    .get('/', () => console.log('Home'))
    .get('/about', () => console.log('Home - About'));

module.exports = router;