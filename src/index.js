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



});
