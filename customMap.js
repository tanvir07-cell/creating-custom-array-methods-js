Array.prototype.myCustomMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};

const data = [1, 2, 3, 4, 5];

console.log(data.myCustomMap((num) => num * 3));
