const jwt = require("jsonwebtoken")
require("dotenv").config();
const JWTSECRET = process.env.JWTSECRET;

const token = jwt.sign({name : "Prasanta", id : 1}, JWTSECRET);
console.log(token);  // Prints the jwt token

