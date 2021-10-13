const express = require('express');
const authController = require(`${config.controller}/auth/authController`);

const router = express.Router();


router.get('/login', authController.login.bind(authController));
router.post('/login', authController.login_store.bind(authController));
router.get('/register', authController.register.bind(authController));
router.put('/register', authController.register_store.bind(authController));


router.get('/', (req, res) => {
    res.send('hello home');
});



module.exports = router;