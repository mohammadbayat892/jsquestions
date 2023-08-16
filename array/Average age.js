const users = [
{name: 'Ali', country: 'Iran', age: 20},
{name: 'John', country: 'USA', age: 30},
{name: 'Maria', country: 'Italy', age: 27},
{name: 'Pierre', country: 'France', age: 25}
];

const getCountriesInfo = users => {

const countries = {};

users.forEach(user => {
if(!countries[user.country]) {
countries[user.country] = [];
}
countries[user.country].push(user.age);
});

return Object.keys(countries).map(country => {
const ages = countries[country];
const avgAge = ages.reduce((a, b) => a + b) / ages.length;
return {
country,
avgAge
};
});

};

console.log(getCountriesInfo(users));

/_
[
{country: 'Iran', avgAge: 20},
{country: 'USA', avgAge: 30},
{country: 'Italy', avgAge: 27},
{country: 'France', avgAge: 25}
]
_/
