const express = require('express')
const { Vendors,Products } = require('../dbconfig')
const route = express.Router();

route.get('/',async(req,res)=>{
  let includes = []
  if (req.query.include === 'products') {
    includes.push({
      model : Products,
      attributes: ['id', 'name']
    })
  }

  const vendors = await Vendors.findAll({
    include: includes
  })

  res.send(vendors)

})
route.post('/',async(req,res)=> {
    const newVendors = await Vendors.create({
        name : req.body.name 
    })
    res.send(newVendors)
})


module.exports = route
