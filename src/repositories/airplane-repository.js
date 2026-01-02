const CrudRepository =require('./crud-repository');
const {Airplane}=require('../models');


class AirplaneRepository extends CrudRepository {
    constructor(){
super(Airplane) //call the constructor of parents class 

    }
    //some other query 

}

module.exports =AirplaneRepository;



