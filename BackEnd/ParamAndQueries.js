const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
app.use(express.json())

let users = [
    {
        "id" : 1,
        "Name": "Prasanta"
    },
    {
        "id" : 2,
        "Name" : "Acharyya"
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Home Page");
});

app.get("/users/:Name", (req, res) => {
    console.log(req.params.id);
    res.status(200).send(req.params);
});




