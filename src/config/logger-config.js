const {createLogger,format,transports}=require('winston');
const{combine,timestamp,label,printf}=format;

const customFormate =printf(({level,message,timestamp,error})=>{
 return `${timestamp}  ${level}: ${message}`;
});
const logger=createLogger({
  format: combine(
  
    timestamp({format:'YYYY-MM-DD-HH-mm-ss'}),
    customFormate,
    format.simple()
  ),
  transports: [new transports.Console(),
new transports.File({filename: 'combine.log'})
  ],
});

module.exports=logger;