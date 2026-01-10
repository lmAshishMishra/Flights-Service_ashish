const express=require('express');
const {CityController} =require('./controllers');
const {ServerConfig,Logger} = require('./config')
const app=express();
const apiRoutes=require('./routes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
console.log('home');
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async ()=>{
console.log(`Successfully start project: ${ServerConfig.PORT}`)
Logger.info("Successfully start server","root",{})
const {City,Airport} =require('./models');

await City.destroy({
    where:{
        id:9
    }

});

// const city =await City.findByPk(9);
// await city.createAirport({name:'Indore Airport',code:'IND'});

});
