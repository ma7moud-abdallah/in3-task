var router = require('express').Router();
const Category = require('../models/categories')
router.get('/',async (req,res,next) => {
    let categories =  await Category.find()
    if (!categories) return res.status(400).send('products not found')
    res.status(200).send(categories)

})

module.exports = router