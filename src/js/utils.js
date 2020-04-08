const saveResult = (data) => {
  const storedResults = JSON.parse(localStorage.getItem('results'));

  if (!storedResults) {    
    const results = [];
    results.push(data);
    localStorage.setItem('results', JSON.stringify(results));
  } else {
    if (storedResults.length >= 10) {
      storedResults.push(data);
      storedResults.reverse();
      const newResults = storedResults.slice(0, 10);
      localStorage.setItem('results', JSON.stringify(newResults));
    } else {
      storedResults.push(data);
      localStorage.setItem('results', JSON.stringify(storedResults));
    }
  }   
};

const UTILS = {
  saveResult
};

export default UTILS;
