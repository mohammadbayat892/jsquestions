const getFemaleUsersCount = users => {
return users.reduce((count, user) => {
if (user.gender === 'خانم') {
return count + 1;
}
return count;
}, 0);
}

console.log(getFemaleUsersCount(users)); // 2
