const express = require('express');
const router = express.Router();

let controller = require('../controller/home');

router.get('/', controller.home);

module.exports = router;