const users = [
{firstName: 'Ali', lastName: 'Alavi', balance: 500},
{firstName: 'Reza', lastName: 'Razavi', balance: 200},
{firstName: 'Sara', lastName: 'Shabani', balance: 100},
{firstName: 'Aban', lastName: 'Abasi', balance: 1000}
];

// تابع findAb

const getRichestAbUser = users => {

const abUsers = getUsersWithAb(users);

let richestUser = abUsers[0];

abUsers.forEach(user => {
if (user.balance > richestUser.balance) {
richestUser = user;
}
});

return `${richestUser.firstName} ${richestUser.lastName}`;

}

console.log(getRichestAbUser(users)); // Aban Abasi
