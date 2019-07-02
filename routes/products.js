var router = require('express').Router();
const Pc = require('../models/pc')



// get all products
router.get('/',async (req,res,next) => {
    let query,page
    if(req.query){
    const queryParam  = JSON.parse(req.query.query)
         query = getQuery(queryParam)
         page = queryParam.page
    }else{
         query = {}
         page = 0
    }
   
    
    
    let count = await Pc.countDocuments(query,(err,count) => count = count)
    let Products = await Pc.find(query).skip(page*10).limit(10)
    if (!Products) return res.status(400).send('Products not found')  
    res.status(200).send({Products,count})

})

const getQuery = (queryParam) => {
    const query = {}
    const {RAM,OpSys,CPU,Inches,Company ,Product,page} = queryParam
    if(RAM) query.RAM = RAM
    if(OpSys) query.OpSys = OpSys
    if(CPU) query.CPU = CPU
    if(Inches) query.Inches = Inches
    if(Company) {
        let searchItems = Company.split(' ').map(item => new RegExp(item,'i'))
        query.Company = {$in: searchItems}
    }
    if(Product) {
        let searchItems = Product.split(' ').map(item => new RegExp(item,'i'))
        query.Product = {$in: searchItems}
    }
    return query 
}
module.exports = router
