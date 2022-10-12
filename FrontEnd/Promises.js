let p = new Promise((resolve, reject)=>{
    let a = 10
    if(a == 10){
        resolve('Success')
    }
    else{
        reject('Failure')
    }
})

p.then((message)=>{
    console.log('The promise is resolved '+ message);
}).catch((message) =>{
    console.log('The promise is not fulfilled '+ message);
})

