const CrudRepository =require('./crud-repository');
const {Airport}=require('../models');


class AirportRepository extends CrudRepository {
    constructor(){
super(Airport) //call the constructor of parents class 

    }
    //some other query 

}

module.exports =AirportRepository;