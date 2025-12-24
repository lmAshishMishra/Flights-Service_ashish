const express =require('express');
const{InfoController} =require('../../controllers')
const router =express.Router();
console.log('V1 routes loaded');


router.get('/info',InfoController.info);

module.exports =router;