function objectReduce(inputObj, reducerFunction, initialValue) {
    let accumulator = initialValue;
  
    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        const value = inputObj[key];
        accumulator = reducerFunction(accumulator, key, value);
      }
    }
  
    return accumulator;
  }
  
  const inputObj = {
    A: 10,
    B: 20,
    C: 30
  };
  
  function sumReducer(accumulator, key, value) {
    return accumulator + value;
  }
  
  const initialValue = 0;
  
  const result = objectReduce(inputObj, sumReducer, initialValue);
  
  console.log(result);
  