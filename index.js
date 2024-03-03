const express = require('express')
const app = express();
const path = require('path')
const PORT = 40;
const cors = require('cors')
const {logger} =require('./middleware/logEvent');
app.use(logger )
    app.use(cors());
app.use(express.static(path.join(__dirname,'./public')))
const one = (req,res,next) =>{
    console.log("One has been completed")
    next()
}
const two = (req,res,next) =>{
    console.log("Two has been completed")
    next()
}
const three = (req,res) =>{
    console.log("Three has been completed")
    res.send("Module finished!!!")
 
}
app.get('^/$|^/index(.html)?$',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    
})
app.get('/ipl24(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'ipl24.html'))
});
app.get('/ipl23(.html)?',(req,res)=>{
    res.redirect(301,'ipl24.html')
})
app.get('/hello(.htmL)?',(req,res,next)=>{
    console.log("Boss it is wrong turn");
    next()
},(req,res)=>{
    res.send("Go to Main Page");
})
app.get('/chain(.html)?',[one,two,three])
app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'404.html'))
})

app.listen(PORT,()=>{console.log("Hello World! to express!")})
