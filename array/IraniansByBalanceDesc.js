function sortIraniansByBalanceDesc(users) {

const iranians = users.filter(user => {
return user.country === 'Iran';
});

iranians.sort((a, b) => {
return b.balance - a.balance;
});

return iranians;

}

const users = [
{name: 'Ali', country: 'Iran', balance: 200000},
{name: 'Reza', country: 'Iran', balance: 500000},
{name: 'John', country: 'USA', balance: 100000},
{name: 'Sara', country: 'Iran', balance: 700000}
];

const sorted = sortIraniansByBalanceDesc(users);

console.log(sorted);
// [
// {name: 'Sara', country: 'Iran', balance: 700000},
// {name: 'Reza', country: 'Iran', balance: 500000},
// {name: 'Ali', country: 'Iran', balance: 200000}
// ]
