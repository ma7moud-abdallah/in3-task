
// used for seeding data

// var router = require('express').Router();
// const Pc = require('../models/pc')
// const Category = require('../models/categories')
// const csv = require('csv-parser');  
// const fs = require('fs');
// one time call api 
// seedin data *no need for it any more*
// router.post('/',(req,res,next) => {
//     fs.createReadStream('assets/database.csv')  
//     .pipe(csv())
//     .on('data', (user) => {
//       pc = new Pc(user)
//       pc.save() 

//     })
//     .on('end', () => {
//       console.log('CSV file successfully processed');
//     });
// })

// getting all data 
// router.get('/',async (req,res,next) => {
// let products = await Pc.find().skip(0).select('Inches')
// if (!products) return res.status(400).send('products not found')
// const Inchess = []
// products.map(Inches => {
//     if(Inchess.indexOf(Inches.Inches) > -1) return
//     Inchess.push(Inches.Inches)
// })
// await new Category({name :'Inches',values:Inchess}).save() 
// let Inches =  await Category.find()
// if (!Inches) return res.status(400).send('products not found')
// res.status(200).send(Inches)
// })
