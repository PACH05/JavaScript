const axios = require("axios");

async function findCountry(region, keyword) {
  let response = await axios.get(
    `https://jsonmock.hackerrank.com/api/countries/search?region =${region}&name=${keyword}&page = 1`
  );
  let result = [];
  let count = 0;
  let length = response.data.data.length;
  for (let i = 0; i < length; i++) {
    let n = response.data.data[i].name;
    let p = response.data.data[0].population;
    let arr = [n, p];
    result.push(arr);
    count++;
  }
  console.log(result);
}

findCountry("Asia", "India");

