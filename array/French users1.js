const users = [
{name: 'Jean', country: 'France', balance: 100},
{name: 'Pierre', country: 'France', balance: 200},
{name: 'Marie', country: 'France', balance: 250},
];

const getFrenchUsersAvgBalance = users => {

const frenchUsers = users.filter(user => user.country === 'France');

const total = frenchUsers.reduce((sum, user) => {
return sum + user.balance;
}, 0);

return total / frenchUsers.length;

}

console.log(getFrenchUsersAvgBalance(users)); // 183.33
