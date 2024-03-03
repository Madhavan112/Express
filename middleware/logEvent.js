const {v4} =require('uuid')
const {format} = require('date-fns');
const fsPromise = require('fs').promises;
const fs = require('fs')
const path = require('path')

const logEvent = async (msg)=>{
    const nowDate = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
    const info = `${nowDate}\t${v4()}\t${msg}`;
    try{
        if(! fs.existsSync(path.join(__dirname,'..','logs'))) await fsPromise.mkdir(path.join(__dirname,'..','logs'))
        await fsPromise.appendFile(path.join(__dirname,'..','logs','log.txt'),info);
    }
    catch(err){
        console.error(err);
    }
}
const logger = (req,res,next)=>{
    logEvent(`${req.method}\t${req.headers.origin}\t${req.url}\n`)
    next()}
module.exports = {logger,logEvent};