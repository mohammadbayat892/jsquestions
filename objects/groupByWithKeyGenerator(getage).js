function groupByWithKeyGenerator(keyGenerator) {
    return function (data) {
      const result = {};
  
      data.forEach(item => {
        const keyValue = keyGenerator(item);
        if (!result[keyValue]) {
          result[keyValue] = [];
        }
        result[keyValue].push(item);
      });
  
      return result;
    };
  }
  
  // تابع keyGenerator برای محاسبه سن کاربر بر اساس birthDate
  const getAge = (user) => {
    const birthYear = (new Date(user.birthDate)).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  
  // نمونه داده‌ها
  const data = [
    { name: 'Alice', birthDate: '2000-01-15' },
    { name: 'Bob', birthDate: '1990-03-20' },
    { name: 'Charlie', birthDate: '2002-06-10' },
    { name: 'David', birthDate: '1995-12-05' },
  ];
  
  // استفاده از تابع groupByWithKeyGenerator با keyGenerator مختلف
  const groupByAge = groupByWithKeyGenerator(getAge);
  
  const groupedDataByAge = groupByAge(data);
  
  console.log(groupedDataByAge);
  