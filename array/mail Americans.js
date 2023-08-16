function getEmailsOver500k(users) {

const filtered = users.filter(user => {
return user.country === 'USA' && user.balance > 500000;
});

const emails = filtered.map(user => user.email);

return emails;

}

const users = [
{name: 'John', email: 'john@example.com', country: 'USA', balance: 600000},
{name: 'Jane', email: 'jane@example.com', country: 'UK', balance: 400000},
{name: 'Jack', email: 'jack@example.com', country: 'USA', balance:300000}
];

const emails = getEmailsOver500k(users);

console.log(emails);
// ['john@example.com']
