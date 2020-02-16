module.exports = function countCats(matrix) {
  return matrix.reduce((totalCats, arr) => {
    const cats = arr.reduce((counter, item) => {
      if (item === '^^') {
        counter++;
      }
      return counter;
    }, 0);
    totalCats += cats;
    return totalCats;
  }, 0);
};
