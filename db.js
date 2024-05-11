const mongoose =require ('mongoose');

// const mongoURL = process.env.MONGODB_URL_LOCAL;
// require('dotenv').config();
const mongoURL = 'mongodb+srv://Raushan_Kumar:raushan12345@cluster0.7rhcsit.mongodb.net/';

// const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;

db.on('connected',()=>{console.log('Connected to MongoDB server')});
db.on('error',()=>{console.log('Connection Failed')});
db.on('disconnected',()=>{console.log('Disconnected to MongoDB server')});

// Export DB connection
module.exports=db;