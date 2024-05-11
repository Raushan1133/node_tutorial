const express = require('express')
const app = express();
const db=require('./db');
const Person = require('./models/person')   

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const menuItem = require('./models/menuItems');

app.get('/', function (req, res) {
  res.send('Hello World, Hello Maa')
})

// app.post('/person',async function (req, res) {

//     try{
        
//     const data = req.body;

//     const newPerson = new Person(data);
//     // newPerson.name=data.name;
//     // newPerson.age=data.age;
//     // newPerson.mobile=data.mobile;
//     // newPerson.email=data.email;
//     const response = await newPerson.save();
//     console.log('Data saved');
//     res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal server error'});
//     }

// })

// app.get('/person',async (req,res)=>{
//     try{
//        const data = await Person.find();
//         console.log('Data fetched');
//     res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal server error'});
//     }
// })

app.get('/chicken',(req,res)=>{
    res.send("Yes sir, Chicken is available");
})

app.get('/momo',(req,res)=>{
    res.send("Yes sir, MOMO is available");
})

app.get('/idli',(req,res)=>{
    let idli={
        name:'Rava idli',
        price:99,
        size:'1p'
    }
    res.send(idli); 
})

// app.post('/menu', async(req,res)=>{
//     try{const data=req.body;

//         const newMenu = new menuItem(data);
//         const response =  await newMenu.save();
//         console.log(response)
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal server error'});
//     }
// })

// app.get('/menu',async (req,res)=>{
//     try{
//         const data = await menuItem.find();
//         console.log('Data fetched');
//         res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"Internal Server Error"});
//     }
// })

// app.get('/person/:workType',async(req,res)=>{
//     try{
//         const workType = req.params.workType; //Extract the worktype from the url parameter
//         if(workType == 'chef' || workType === 'owner' || workType === 'waiter'){
//             const response  = await Person.find({work:workType});
//             console.log(response);
//             console.log('Response fetched');
//             res.status(200).json(response);
//         }else{
//             res.status(404).json({error:"No worktype found"});
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"Worktype not found"});
//     }
// })

const personRoutes = require("./Routes/personRoutes");
app.use("/person",personRoutes);

const menuRoutes = require('./Routes/menuItemsRoutes');
app.use('/menu',menuRoutes);

// Comment added

app.listen(PORT,()=>{
    console.log('Server is running on port 3000');
})