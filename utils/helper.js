function format_date(date) {
    const [year, month, day] = new Date(date).toISOString().substr(0, 10).split('-');
    return `${month}/${day}/${year}`;
  }
  
  function format_plural(word, amount) {
    if (amount !== 1) {
      return `${word}s`;
    }
  
    return word;
  }
  
  module.exports = {
    format_date,
    format_plural
  };