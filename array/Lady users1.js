const users = [
{name: 'رضا', gender: 'آقا'},
{name: 'فاطمه', gender: 'خانم'},
{name: 'محمد', gender: 'آقا'},
{name: 'زهرا', gender: 'خانم'}
];

const getFemaleUsersCount = users => {
const females = users.filter(user => user.gender === 'خانم');
return females.length;
}

console.log(getFemaleUsersCount(users)); // 2
