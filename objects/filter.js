function objectFilter(inputObj, filterFunction) {
    const result = {};
  
    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        const value = inputObj[key];
        if (filterFunction(key, value)) {
          result[key] = value;
        }
      }
    }
  
    return result;
  }
  
  const inputObj = {
    A: 10,
    B: 20,
    C: 30
  };
  
  function filterByValueGreaterThan20(key, value) {
    return value > 20;
  }
  
  const outputObj = objectFilter(inputObj, filterByValueGreaterThan20);
  
  console.log(outputObj);
  