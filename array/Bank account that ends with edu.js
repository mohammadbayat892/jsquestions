const users = [
{name: 'رضا', email: 'reza@sharif.edu', balance: 100},
{name: 'نیما', email: 'nima@ut.ac.ir', balance: 200},
{name: 'الهه', email: 'elahe@gmail.com', balance: 300},
];

const getEduUsersBalances = (users) => {
return users
.filter(user => user.email.endsWith('.edu'))
.map(user => user.balance);
}

console.log(getEduUsersBalances(users)); // [100, 200]
