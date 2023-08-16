const users = [
{name: 'Lukas', country: 'Germany', age: 23, balance: 800},
{name: 'Juan', country: 'Spain', age: 17, balance: 600},
{name: 'Maria', country: 'Italy', age: 19, balance: 400},
{name: 'Jean', country: 'France', age: 22, balance: 1000},
];

const under21 = user => user.age < 21;

const getRichestUnder21 = users => {

let richestUser = users[0];

users.filter(under21)
.forEach(user => {
if (user.balance > richestUser.balance) {
richestUser = user;
}
});

return `${richestUser.name} - ${richestUser.country}`;
}

console.log(getRichestUnder21(users)); // Juan - Spain
