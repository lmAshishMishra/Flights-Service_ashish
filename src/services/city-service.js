const {StatusCodes }=require('http-status-codes');

const { CityRepository } =require('../repositories')
const AppError=require('../utils/errors/app-error')

const cityRepository =new CityRepository();

async function createCity(data) {
    console.log('service');
    try {
    const city = await cityRepository.create(data);
    return city;
} catch (error) {
    if(error.name==='SequelizeValidationError'||error.name === 'SequelizeUniqueConstraintError')
  {
   
    let explanation=[];
    error.errors.forEach((err)=>{
      explanation.push(err.path+' '+err.message);
  });
  console.log(explanation);
    
    throw new AppError(explanation,StatusCodes.BAD_REQUEST)
  }
   throw new AppError('cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR)


    
}
}

async function  destroyCity(id){
  try {
    const cities =await cityRepository.destroy(id);

    return cities;
  } catch (error) {
  if(error.statusCode==StatusCodes.NOT_FOUND){
       throw new AppError('The city you requested to delete not found',StatusCodes.NOT_FOUND)
    }
    
     throw new AppError('cannot fetch data of all cities',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}
async function  updateCity(id,data){
  try {
   
    const cities =await cityRepository.update(id,data);

    return cities;
  } catch (error) {
  if(error.statusCode==StatusCodes.NOT_FOUND){
       throw new AppError('The city you try to update not found ',StatusCodes.NOT_FOUND)
    }
    
     throw new AppError('cannot u fetch data of all city',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}


module.exports = {
 createCity,
 destroyCity,
 updateCity
}



