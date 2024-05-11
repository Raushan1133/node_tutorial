const express = require ("express");

const router = express.Router();

const menuItem = require('../models/menuItems');

router.post('/', async(req,res)=>{
    try{const data=req.body;

        const newMenu = new menuItem(data);
        const response =  await newMenu.save();
        console.log(response)
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/',async (req,res)=>{
    try{
        const data = await menuItem.find();
        console.log('Data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.get("/:taste",async (req,res)=>{
    try{
        
        const taste = req.params.taste;
        if(taste === 'sweet'|| taste === 'sour' || taste === 'spicy'){
            const response = await menuItem.find({taste:taste});
            console.log('Data fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:"No taste found"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"No workType found"});
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const itemId = req.params.id;
        const updateItem = req.body;

        const response =await menuItem.findByIdAndUpdate(itemId, updateItem, {
            new:true,
            runValidators:true
        })

        if(!response){
            res.status(400).json({messege:"No items found"});
        }

        console.log("Data updated");
        res.status(200).json({Messege: "Data updated successfully"});

    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Internal Server Error"});
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        let itemId = req.params.id;
        const response =await menuItem.findByIdAndDelete(itemId);

        if(!response){
            console.log('No data found');
            res.status(404).json({Error:"No items found"});
        }

        console.log("Data deleted successfully");
        res.status(200).json({messege:"Data deleted successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({Messege: "Internal Server Error"});
    }
})

module.exports = router;