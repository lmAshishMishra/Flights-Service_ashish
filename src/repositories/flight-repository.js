const CrudRepository =require('./crud-repository');
const {Flight}=require('../models');


class FlightRepository extends CrudRepository {
    constructor(){
super(Flight) //call the constructor of parents class 

    }
    //some other query 

}

module.exports =FlightRepository;