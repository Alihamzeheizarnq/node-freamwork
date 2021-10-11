const express = require('express');
const homeController = require(`${config.adminController}/homeController`);



const router = express.Router();




router.get('/', homeController.index.bind(homeController));




module.exports = express().use('/admin', router);