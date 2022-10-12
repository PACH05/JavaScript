const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
app.use(express.json())

let users = {};    //JS object holds the data

app.get("/", (req,res) => {
    res.send("Home Page ---> Go to /Users")
})
//Fetching the data
app.get('/users',(req,res) =>{
    res.send(users)
})

//Posting data
app.post('/users', (req,res)=>{
    console.log(req.body);
    users = req.body;
    res.json({
        message:"Message sent",
        user:req.body
    })
});

//Updating data
app.patch('/users', (req, res)=>{
    console.log(req.body);
    let dataupdate = req.body
    //for in loop to update the key value pair after updation
    for(key in dataupdate){
        users[key] = dataupdate[key];
    } 
    res.json({
        message:"data updated"
    })
});

//Deleting the data 

app.delete("/users", (req,res) =>{
    users = {}
    res.send("Data Deleted")
})