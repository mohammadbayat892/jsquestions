function deepLog(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (typeof value === 'string' || typeof value === 'number' || value instanceof Date) {
          console.log(value);
        } else if (typeof value === 'object') {
          deepLog(value); // فراخوانی بازگشتی برای مقادیر شیء دیگر
        }
      }
    }
  }
  
  const inputObj = {
    foo: 'bar',
    baz: {
      a: 'b',
      c: 'd',
      e: {},
      f: { g: 'h' }
    }
  };
  
  deepLog(inputObj);
  