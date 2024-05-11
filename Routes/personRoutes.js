const express = require ("express");

const routes = express.Router();

const Person = require('../models/person');

routes.post('/',async function (req, res) {

    try{
        
    const data = req.body;

    const newPerson = new Person(data);
    // newPerson.name=data.name;
    // newPerson.age=data.age;
    // newPerson.mobile=data.mobile;
    // newPerson.email=data.email;
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

})

routes.get('/',async (req,res)=>{
    try{
       const data = await Person.find();
        console.log('Data fetched');
    res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

routes.get('//:workType',async(req,res)=>{
    try{
        const workType = req.params.workType; //Extract the worktype from the url parameter
        if(workType == 'chef' || workType === 'owner' || workType === 'waiter'){
            const response  = await Person.find({work:workType});
            console.log(response);
            console.log('Response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:"No worktype found"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Worktype not found"});
    }
})

routes.put("/:id",async (req,res)=>{
    try{
        const personId= req.params.id;
        const updatedData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedData, {
            new:true,
            runValidators:true
        });

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log("Data updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(404).json({error:"No record found"});
    }
})

routes.delete('/:id',async (req,res)=>{
    try{
        const personId = req.params.id;
        const response =await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log("Data Deleted Successfully");
        res.status(200).json({messege:"Person deleted successfully"});
    }
    catch(err){
        console.log(err);
        res.status(404).json({error:"No record found"});
    }
})

module.exports = routes;