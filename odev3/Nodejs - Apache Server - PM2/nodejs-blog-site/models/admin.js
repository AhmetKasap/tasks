const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    name : {type : String, require:true},
    password : {type : String, require:true}
})

const admin = mongoose.model('Admin', adminSchema)

module.exports = admin