const express = require('express');
const router = express.Router();

let homeController = require('../controller/home');
let sowHexController = require('../controller/sow_hexagram');

router.get('/', homeController.home);

router.post('/sow-hexagram', sowHexController.sow_hexagram)



module.exports = router;