const express = require('express');
const { auth } = require('../app/http/middleware/auth');
const homeController = require(`${config.adminController}/homeController`);



const router = express.Router();

router.use(auth);
router.get('/', homeController.index.bind(homeController));







module.exports = express().use('/admin', router);