const users = [
{ firstName: 'Ali', lastName: 'Rezaei', country: 'Iran' },
{ firstName: 'Sara', lastName: 'Ahmadi', country: 'USA' },
{ firstName: 'Amir', lastName: 'Mohammadi', country: 'Iran' },
// ... سایر کاربرها ...
];

// انتخاب کاربرهای ایرانی با استفاده از filter
const iranianUsers = users.filter(user => user.country === 'Iran');

// استخراج نام و خانوادگی کاربرهای ایرانی با استفاده از map
const iranianNames = iranianUsers.map(user => `${user.firstName} ${user.lastName}`);

console.log(iranianNames);
