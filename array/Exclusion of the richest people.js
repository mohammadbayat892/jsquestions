const users = [
{name: 'John', country: 'USA', balance: 400},
{name: 'Marie', country: 'France', balance: 200},
 {name: 'Ali', country: 'Iran', balance: 500},
{name: 'Pierre', country: 'France', balance: 1000}
];

function removeRichestPerCountry(users) {

let perCountryRichest = {};

// پیدا کردن پولدارترین هر کشور
users.forEach(user => {
if (!perCountryRichest[user.country] || user.balance > perCountryRichest[user.country].balance) {
perCountryRichest[user.country] = user;
}
});

// حذف پولدارترین‌ها از لیست اصلی
let filteredList = [];
users.forEach(user => {
if (user !== perCountryRichest[user.country]) {
filteredList.push(user);
}
});

return filteredList;

}

const newList = removeRichestPerCountry(users);

console.log(newList);
// [ {name: 'Marie', country: 'France', balance: 200}, {name: 'Ali', country: 'Iran', balance: 500} ]
