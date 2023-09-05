function groupByGender(users) {
    const result = {};
  
    users.forEach(user => {
      const gender = user.gender;
      if (!result[gender]) {
        result[gender] = [];
      }
      result[gender].push(user);
    });
  
    return result;
  }
  