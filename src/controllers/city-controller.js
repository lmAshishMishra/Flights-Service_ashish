const { StatusCodes } = require('http-status-codes');
const {CityService } =require('../services');
const {SuccessResponse,ErrorResponse} =require('../utils/common');




/**
 * POST :/city
 * req-body {name: 'London'}
 
 */


async function createCity (req,res){
    try {
        console.log('controller');
        console.log(req.body,"aa");
        const city =await CityService.createCity({
           name:req.body.name
        });
        SuccessResponse.data=city;
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
async function destroyCity(req,res) {
    try {
        const cities=await CityService.destroyCity(req.params.id);
        SuccessResponse.data=cities;
      
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

async function updateCity(req,res) {
    try {
        const data=req.body;
    
        const cities=await CityService.updateCity(req.params.id,data);
        SuccessResponse.data=cities;
      
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
    createCity,
    destroyCity,
    updateCity
};

