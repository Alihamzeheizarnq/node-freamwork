const express = require('express');
const { notAllowLoginUser } = require('../app/http/middleware/notAllowLoginUser');
const authController = require(`${config.controller}/auth/authController`);

const router = express.Router();


router.get('/login', notAllowLoginUser, authController.login.bind(authController));
router.post('/login', notAllowLoginUser, authController.login_store.bind(authController));
router.get('/register', notAllowLoginUser, authController.register.bind(authController));
router.post('/register', notAllowLoginUser, authController.register_store.bind(authController));


router.get('/', (req, res) => {
    res.send('hello home');
});



module.exports = router;