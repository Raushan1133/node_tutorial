// Json String to Object
let jsonString= '{"name":"Raushan","age":25,"city":"Patna"}';
let jsonToObj = JSON.parse(jsonString);
console.log(jsonToObj);

// Object to json string
let jsonObject={ name: 'Raushan', age: 25, city: 'Patna' };
let jsonStr = JSON.stringify(jsonObject);
console.log(jsonStr);