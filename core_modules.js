console.log('core_modules file is running...')
let fs= require ('fs');
let os = require ('os');

// Os info
let user = os.userInfo();
// console.log(user);
// console.log(user.username);
// console.log(os)
// console.log(fs)
console.log(os)

// fs info
fs.appendFile('greeting.txt', `Hi ${user.username} ! \n`, ()=>{console.log('Greeting completed')});