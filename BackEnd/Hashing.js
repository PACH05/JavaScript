//Hashing of password is important when we store them
// in the database to protect them from misuse in case of a data breach

const bcrypt = require("bcryptjs");

const passw = "12345";
let wrongPass = "12323";

// Async way :

async function comparePassword(pass, hash) {
    let comp = await bcrypt.compare(pass, hash);
    console.log(comp);
  }

async function createHash(password) {
  return await bcrypt.hash(password, 2);
}

(async()=>{
    let res = await createHash(passw);
    console.log("Hashed password : "+res);
    comparePassword(passw,res);    //True
    comparePassword(wrongPass,res);   //False
})();     //IIF


// Sync way :

function createHash2(pass){
    let hash = bcrypt.hashSync(pass)
    return hash;
}
function comparePass2(pass, hash){
  let val = bcrypt.compareSync(pass,hash)
  return val;
}
let res = createHash2(passw)
console.log(res);
let ansT = comparePass2(passw,res)     //True 
let ansF = comparePass2(wrongPass,res)  //False
console.log(ansT, ansF);


