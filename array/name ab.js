const users = [
{firstName: 'Ali', lastName: 'Alavi'},
{firstName: 'Reza', lastName: 'Razavi'},
{firstName: 'Sara', lastName: 'Shabani'},
{firstName: 'Aban', lastName: 'Abasi'}
];

const findAb = str => {
return str.toLowerCase().includes('ab');
}

const getUsersWithAb = users => {
return users.filter(user => {
return findAb(user.firstName) || findAb(user.lastName);
})
.map(user => `${user.firstName} ${user.lastName}`);
}

console.log(getUsersWithAb(users));
// [ 'Ali Alavi', 'Reza Razavi', 'Aban Abasi' ]
