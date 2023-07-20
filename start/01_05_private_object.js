// Write your code here
const username = Symbol("username");
const password = Symbol("password");


const user = {
    [username]: 'carla',
    [password]: '1234',
    age: 27
}


console.log(user.username);
console.log(user.password);