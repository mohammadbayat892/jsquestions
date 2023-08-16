const users = [
{name:'John', country:'USA', gender:'Male', age:35, balance:4000},
{name:'Marie', country:'France', gender:'Female', age:25, balance:5000},
{name:'Ali', country:'Iran', gender:'Male', age:20, balance:1500},
{name:'Pierre', country:'France', gender:'Male', age:28, balance:2000}
];

const getAgeDiff = users => {

const richestAmerican = users.filter(u => u.country === 'USA' && u.gender === 'Male')
.reduce((a, b) => (a.balance > b.balance) ? a : b);

const richestFrenchWoman = users.filter(u => u.country === 'France' && u.gender === 'Female')
.reduce((a, b) => (a.balance > b.balance) ? a : b);

return richestAmerican.age - richestFrenchWoman.age;

};

console.log(getAgeDiff(users)); // 10
