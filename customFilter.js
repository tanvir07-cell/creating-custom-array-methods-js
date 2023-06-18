Array.prototype.myCustomFilter = function (cb) {
  let filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

const data = [1, 2, 3, 4, 5, 10, 20];

console.log(data.myCustomFilter((num) => num >= 3));
