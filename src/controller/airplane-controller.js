const { AirPlaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const createAirplane = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debugging line
    const airplane = await AirPlaneService.createAirplane({
      modalNumber: req.body.modalNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Airplane created successfully',
      error: {},
      data: airplane,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
      data: {},
    });
  }
};

module.exports = { createAirplane };
