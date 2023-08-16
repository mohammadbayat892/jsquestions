const users = [
{firstName: 'علی', lastName: 'احمدی', birthDate: '2000/01/10'},
{firstName: 'مریم', lastName: 'جعفری', birthDate: '1995/03/15'},
{firstName: 'رضا', lastName: 'صادقی', birthDate: '2001/05/20'},
{firstName: 'فاطمه', lastName: 'رجبی', birthDate: '2005/03/01'},
];

const bornInMarch = user => {
const birthMonth = new Date(user.birthDate).getMonth() + 1;
return birthMonth === 3;
}

const adult = user => new Date().getFullYear() - new Date(user.birthDate).getFullYear() >= 18;

const getEligibleUsers = users => {
return users
.filter(adult)
.filter(bornInMarch)
.map(user => `${user.firstName} ${user.lastName}`);
}

console.log(getEligibleUsers(users));
// [ 'علی احمدی', 'فاطمه رجبی' ]
