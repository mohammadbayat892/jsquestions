function getIranianNamesWithLongEmails(users) {

const filtered = users.filter(user => {
return user.email.length > 30;
});

const names = filtered.map(user => {
return `${user.firstName} ${user.lastName}`;
});

return names;

}

const users = [
{firstName: 'علی', lastName: 'رضایی', email: 'ali@example.com'},
{firstName: 'محمد', lastName: 'احمدی', email: 'mmd.ahmadi@email.com'},
{firstName: 'زهرا', lastName: 'جعفری', email: 'zahra.jafariiiiiii@example.co'}
];

const longEmails = getIranianNamesWithLongEmails(users);

console.log(longEmails);
// ['زهرا جعفری']
