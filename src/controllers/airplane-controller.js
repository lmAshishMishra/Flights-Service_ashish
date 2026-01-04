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
        .json(
           SuccessResponse
        )
    } catch (error) {
        ErrorResponse.error =error;
        return res.status(error.statusCode)
        .json(ErrorResponse);
    }
}

async function getAirplanes(req,res) {
    try {
        const airplanes=await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
          return res
        .status(StatusCodes.CREATED)
        .json(
           SuccessResponse
        )
    } catch (error) {
         ErrorResponse.error =error;
        return res.status(error.statusCode)
        .json(ErrorResponse);
    }
}
/**
 * GET :/airplane/:id
 * req-body {}
 
 */
async function getAirplane(req,res) {
    try {
        const airplane=await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data=airplane;
      
          return res
                    .status(StatusCodes.CREATED)
                    .json(
           SuccessResponse
        )
    } catch (error) {
         ErrorResponse.error =error;
        return res.status(error.statusCode)
        .json(ErrorResponse);
    }
}

/**
 * DELETE :/airplanes/:id
 * req-body {}
 
 */
async function destroyAirplane(req,res) {
    try {
        const airplanes=await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data=airplanes;
      
          return res
                    .status(StatusCodes.OK)
                    .json(
           SuccessResponse
        )
    } catch (error) {
         ErrorResponse.error =error;
        return res.status(error.statusCode)
        .json(ErrorResponse);
    }
}

/**
 * UPDATE :/airplanes/:id
 * req-body {}
 
 */

async function updateAirplane(req,res) {
    try {
        const data=req.body;
    
        const airplanes=await AirplaneService.updateAirplane(req.params.id,data);
        SuccessResponse.data=airplanes;
      
          return res
                    .status(StatusCodes.OK)
                    .json(
           SuccessResponse
        )
    } catch (error) {
         ErrorResponse.error =error;
        return res.status(error.statusCode)
        .json(ErrorResponse);
    }
}



module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}