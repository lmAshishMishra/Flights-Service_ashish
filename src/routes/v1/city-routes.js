const express =require('express');
const {CityController} =require('../../controllers');

const router =express.Router();
console.log("city routes loaded a");
// /api/v1/airplanes POST
console.log('cityRoutes');
router
    .post('/',CityController.createCity);

// /api/v1/airplanes GET



module.exports =router;