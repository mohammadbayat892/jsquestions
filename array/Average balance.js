const users = [
{name: 'Ali', country: 'Iran', birthDate: '2000-01-15', balance: 500},
{name: 'Reza', country: 'Iran', birthDate: '1995-06-20', balance: 1000},
{name: 'Maryam', country: 'Iran', birthDate: '1999-08-25', balance: 750},
{name: 'John', country: 'USA', birthDate: '1990-04-05', balance: 350}
];

const bornInSecondHalf = user => {
const birthDay = new Date(user.birthDate).getDate();
return birthDay >= 15;
}

const getAvgBalance = users => {

const iraniansInSecondHalf = users
.filter(u => u.country === 'Iran')
.filter(bornInSecondHalf);

const total = iraniansInSecondHalf.reduce((sum, u) => sum + u.balance, 0);

return total / iraniansInSecondHalf.length;

};

console.log(getAvgBalance(users)); // 833.33
