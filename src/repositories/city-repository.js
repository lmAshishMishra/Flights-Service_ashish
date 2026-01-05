const CrudRepository =require('./crud-repository');
const {City}=require('../models');


class CityRepository extends CrudRepository {
    constructor(){
super(City) //call the constructor of parents class 

    }
    //some other query 

}

module.exports =CityRepository;