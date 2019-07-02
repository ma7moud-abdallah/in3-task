const mongoose = require('mongoose')
const schema = mongoose.Schema
categorySchema = new schema({
    name:{type:String, unique:true},
    values:{type:Array,default:[]}
})

module.exports = mongoose.model('Category',categorySchema)