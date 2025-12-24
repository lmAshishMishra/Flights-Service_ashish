const express =require('express');
console.log('Routes index loaded');
const router =express.Router();
const v1Routes =require('./v1');
router.use('/v1',v1Routes);

module.exports=router;