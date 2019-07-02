const mongoose = require('mongoose')
const schema = mongoose.Schema
pcSchema = new schema({

    Company:{type:String},
    Product:{type:String},
    Type:{type:String},
    Inches:{type:String},
    Resolution:{type:String},
    CPU:{type:String},
    RAM:{type:String},
    Memory:{type:String},
    Graphics:{type:String},
    OpSys:{type:String},
    Weight:{type:String},
    Price:{type:String}
})

pcSchema.index({Company:"text",Product:"text"})

module.exports = mongoose.model('Pc',pcSchema)