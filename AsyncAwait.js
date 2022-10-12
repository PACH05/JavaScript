async function resolveAfter() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter();
    console.log(result);
    // expected output: "resolved"
  }
  
asyncCall();