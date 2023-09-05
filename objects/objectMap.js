function objectMap(inputObj, mapFunction) {
    const result = {};
  
    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        const value = inputObj[key];
        result[key] = mapFunction(key, value);
      }
    }
  
    return result;
  }
  
  const inputObj = {
    A: 10,
    B: 20
  };
  
  function multiplyByTwo(key, value) {
    return key + (value * 2).toString();
  }
  
  const outputObj = objectMap(inputObj, multiplyByTwo);
  
  console.log(outputObj);
  