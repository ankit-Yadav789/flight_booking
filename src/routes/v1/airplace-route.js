const express = require('express');
const { AirPlaneController } = require('../../controller');
const router = express.Router();
 
router.post('/', AirPlaneController.createAirplane);

module.exports = router;