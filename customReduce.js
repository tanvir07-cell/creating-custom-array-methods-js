Array.prototype.myCustomReduce = function (cb, init) {
  for (let i = 0; i < this.length; i++) {
    init = cb(init, this[i]);
  }
  return init;
};

const data = [1, 2, 3, 4, 5, 6, 7, 2];

console.log(data.myCustomReduce((acc, cur) => acc + cur, 0));
