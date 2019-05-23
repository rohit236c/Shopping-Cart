const express = require('express')
const { Vendors, Products } = require('../dbconfig')
const route = express.Router();

route.get('/',async (req,res)=> {
    res.send( await Products.findAll({
        include : [{ 
            model : Vendors,
            attributes: ['id', 'name']
        }]
    }))
    // res.send(sendproducts);
})

route.post('/',async(req,res)=> {
    const newProducts = await Products.create({
        name : req.body.name,
        price : req.body.price,
        quantity : req.body.quantity,
        vendorId : req.body.vendorId,
    })    

    res.status(201).send(newProducts)

})

module.exports = route;