const express = require('express')
const router = express.Router();
const path = require('path')

router.get('/|match(.html)',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','match.html'))
})
 module.exports = router;