const express = require('express');
const router = express.Router();
const User = require('../controllers/controller_users');

router.post('/register', User.registerUser);

router.delete('/delete/:username', User.deleteUser);
router.post('/login', User.loginUser);

module.exports = router;
