var users = [{ name: 'someName1', email: 'someName1@gmail.com' }, { name: 'someName2', email: 'someName2@gmail.com' }, { name: 'someName3', email: 'someName3@gmail.com' }, { name: 'someName4', email: 'someName4@gmail.com' }, { name: 'someName5', email: 'someName5@gmail.com' }];
var inp = prompt('Input number');
var ind = +inp - 1;
console.log(users[ind]);
alert('name: ' + users[ind].name + ', email:' + users[ind].email)