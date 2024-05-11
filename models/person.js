let mongoose = require('mongoose');

// Define person details

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        // required:true
    },
    mobile:{
        type:Number,
        // required:trusted
    },
    email:{
        type:String,
        unique:true,
        required:mongoose.trusted
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        // required:true
    }
});

const Person = mongoose.model('person',personSchema);

module.exports=Person;  