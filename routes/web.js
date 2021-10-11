const express = require('express');
const authController = require(`${config.controller}/auth/authController`);

const router = express.Router();


router.get('/login', authController.login.bind(authController))


router.get('/', (req, res) => {
    res.send('hello home');
});



module.exports = router;