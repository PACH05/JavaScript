const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => console.log(`Server started at ${PORT}`));

app.get("/", (req, res) => {
  res.send("hi")
});

app.get("/about-us", (req, res)=>{
  res.redirect('/login')
});

app.get("/login", (req, res)=>{
  res.send("Login page")
});

app.use((req,res)=>{
  res.status(404).sendFile('./htmlfiles/Errorpage.html',{root:__dirname})
});


