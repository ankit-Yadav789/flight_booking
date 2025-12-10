const express = require('express');
const { InfoController } = require('../../controller');
const router = express.Router();
const airplaneRoute = require('./airplace-route');

router.use('/airplane',airplaneRoute);

router.get("/info",InfoController.info); 

module.exports = router;