const express = require('express')
const mongoose = require('mongoose')

const app = express();
const dbLink = process.env.DBLINK;
app.get('/', (req,res) => {
    res.send("Server is running")
})


mongoose.connect(dbLink)
.then(function(db){
    console.log("Database Connection Successfull");
})
.catch(function(err){
  console.log(err);
})

const userSchema = mongoose.Schema({
    name:{
        type : String,
        require : true,
    },
    email:{
        type : String,
        require :true,
        unique : true,
    },
    password:{
        type : String,
        require : true,
        minLength : 8
    },
    confirmpassword:{
        type : String,
        require : true,
        minLength : 8
    },
})

const userModel = mongoose.model('userModel', userSchema)

const createUser = async() => {
    let user ={
        name: 'Prasanta',
        email:'pach@test.com',
        password: '1234567899',
        confirmpassword: '1234567899'
    }
    let data = await userModel.create(user)
    console.log(data);
}
createUser();