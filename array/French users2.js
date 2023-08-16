const getFrenchUsersAvgBalance = users => {

let total = 0;
const frenchUsers = users.filter(user => user.country === 'France');

frenchUsers.forEach(user => {
total += user.balance;
});

return total / frenchUsers.length;
}

console.log(getFrenchUsersAvgBalance(users)); // 183.33
