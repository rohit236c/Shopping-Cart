const express = require('express')
const {Users,Products,CartItems} = require('../dbconfig')
const route = express.Router();


route.get('/',
 async(req,res)=>{
    res.send(await CartItems.findAll({
        include:[
        {
            model : Users,
          attributes: ['id', 'username']
        },
        {
            model : Products,
            attributes :['id','name','price','quantity']
        }
    ]
 }))
})

route.post('/',async(req,res)=>{

 const newitems = await CartItems.create({
     quantity:req.body.quantity,
     userId: req.body.userId,
     productId : req.body.productId,
    })
 res.send(newitems);
})

module.exports = route;