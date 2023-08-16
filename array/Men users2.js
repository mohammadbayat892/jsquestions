const getMaleUsersBalance = users => {
let total = 0;

users.filter(user => user.gender === 'آقا')
.forEach(user => {
total += user.balance;
});

return total;
}

console.log(getMaleUsersBalance(users)); // 400
