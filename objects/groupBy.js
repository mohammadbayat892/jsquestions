function groupBy(key) {
    return function (data) {
      const result = {};
  
      data.forEach(item => {
        const keyValue = item[key];
        if (!result[keyValue]) {
          result[keyValue] = [];
        }
        result[keyValue].push(item);
      });
  
      return result;
    };
  }
 
  
    const data = [
    { name: 'Alice', country: 'USA' },
    { name: 'Bob', country: 'Canada' },
    { name: 'Charlie', country: 'USA' },
    { name: 'David', country: 'Canada' },
  ];
  
  const groupByCountry = groupBy('country');
  const groupByGender = groupBy('gender');
  const groupByBirthDate = groupBy('birthDate');
  
  const groupedDataByCountry = groupByCountry(data);
  const groupedDataByGender = groupByGender(data);
  const groupedDataByBirthDate = groupByBirthDate(data);
  
  console.log(groupedDataByCountry);
  console.log(groupedDataByGender);
  console.log(groupedDataByBirthDate);
  