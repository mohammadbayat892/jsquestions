const users = [
{name: 'Ali', country: 'Iran', age: 17},
{name: 'John', country: 'USA', age: 20},
{name: 'Pierre', country: 'France', age: 25}
];

function filterUsers(users) {

let filtered = [];

users.forEach(user => {
if (user.country === 'Iran' && user.age >= 18) {
filtered.push(user);
}
else if (user.country === 'USA' && user.age >= 22) {
filtered.push(user);
}
else {
filtered.push(user);
}
});

return filtered;

}

const newList = filterUsers(users);

console.log(newList);
// [ {name: 'John', country: 'USA', age: 20}, {name: 'Pierre', country: 'France', age: 25} ]

console.log(users); // no changes
