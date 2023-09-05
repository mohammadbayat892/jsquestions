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
  
//   example
  const getAge = (user) => 2023 - (new Date(user.birthDate)).getFullYear();
  
//   example
  const data = [
    { name: 'Alice', birthDate: '1990-01-15' },
    { name: 'Bob', birthDate: '1985-03-20' },
    { name: 'Charlie', birthDate: '1995-06-10' },
    { name: 'David', birthDate: '1980-12-05' },
  ];
  
  const groupByAge = groupByWithKeyGenerator(getAge);
  
  const groupedDataByAge = groupByAge(data);
  
  console.log(groupedDataByAge);
  