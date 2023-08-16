const users = [
{name: 'رضا', gender: 'آقا', balance: 100},
{name: 'فاطمه', gender: 'خانم', balance: 200},
{name: 'امیر', gender: 'آقا', balance: 300},
];

const getMaleUsersBalance = users => {
const males = users.filter(user => user.gender === 'آقا');

return males.reduce((total, user) => {
return total + user.balance;
}, 0);
}

console.log(getMaleUsersBalance(users)); // 400
