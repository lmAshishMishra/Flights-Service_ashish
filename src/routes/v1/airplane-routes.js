const express =require('express');
const {AirplaneController} =require('../../controllers');
const {AirplaneMiddlewares} =require('../../middlewares')
const router =express.Router();
console.log("airplane routes loaded a");
router
    .post('/' ,
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);

module.exports =router;