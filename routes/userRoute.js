const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userController');


router.post('/auth', userCtrl.login)

module.exports = router;