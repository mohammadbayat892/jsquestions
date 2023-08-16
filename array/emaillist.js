const emailList = ['user1@example.com', 'user2@example.com', 'user3@example.com'];

const modifiedEmailList = emailList.map(email => {
const username = email.split('@')[0]; // جدا کردن نام کاربری
return username + '@yourdomain.com'; // جایگزینی دامنه جدید
});

console.log(modifiedEmailList);
