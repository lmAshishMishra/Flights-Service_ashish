const { StatusCodes } = require('http-status-codes');
const {AirplaneService } =require('../services');
const {SuccessResponse,ErrorResponse} =require('../utils/common');
/**
 * POST :/airplane
 * req-body {modelNumber: 'airbus123,capacity:200}
 
 */


async function createAirplane (req,res){
    try {
        console.log(req.body,"aa");
        const airplane =await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponse.data=airplane;
        return res
        .status(StatusCodes.CREATED)
        .json({
           SuccessResponse
        })
    } catch (error) {
        ErrorResponse.error =error;
        return res.status(error.StatusCodes)
        .json(ErrorResponse);
    }
}

async function getAirplanes(req,res) {
    try {
        const airplanes=await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
          return res
        .status(StatusCodes.CREATED)
        .json({
           SuccessResponse
        })
    } catch (error) {
         ErrorResponse.error =error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}


module.exports ={
    createAirplane,
    getAirplanes
}