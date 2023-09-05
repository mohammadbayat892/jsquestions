function groupByCountry(users) {
    const result = {};
  
    users.forEach(user => {
      const country = user.country;
      if (!result[country]) {
        result[country] = [];
      }
      result[country].push(user);
    });
  
    return result;
  }
  