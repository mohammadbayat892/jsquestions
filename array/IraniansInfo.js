const users = [
{name: 'Reza', country: 'Iran', email: 'reza@example.com', age: 25},
{name: 'Maria', country: 'Italy', email: 'maria@example.com', age: 32},
{name: 'Ali', country: 'Iran', email: 'ali@example.com', age: 19},
{name: 'Sara', country: 'France', email: 'sara@example.com', age: 27},
];

const getIraniansInfo = users => {
return users
.filter(user => user.country === 'Iran')
.map(user => ({
email: user.email,
age: user.age
}));
}

console.log(getIraniansInfo(users));

/_
[
{email: 'reza@example.com', age: 25},
{email: 'ali@example.com', age: 19}
]
_/
