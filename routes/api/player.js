const express = require('express')
const router = express.Router();
const path = require('path')
router.use(express.json());
const data={}
data.details=require('../../model/player.json')
router.route('/')
    .get((req,res)=>{
        res.json(data.details)
    })
    .post((req,res)=>{
        res.json({
            "Name":req.body.Name,
            "Runs":req.body.Runs
        })
    })
    .put((req,res)=>{
        res.json({
            "Name":req.body.Name,
            "Runs":req.body.Runs
        })
    })
   .delete((req,res)=>{
    res.json({"id":req.body.id})
   })
   router.route('/:id')
   .get((req,res)=>{
    res.json({"id":req.params.id})
   })

module.exports=router;