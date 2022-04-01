const find = (limit, arr) => {
  let n = 0;
  let missingElement = "";
  arr.sort((a, b) => {
    return a - b;
  });
  arr.push(limit);
  arr.every((element) => {
    if (n + 1 === element) {
      n++;
      return true;
    } else {
      missingElement = element - 1;
      return false;
    }
  });
  console.log(missingElement);
  return missingElement;
};

find(7, [5, 3, 2, 4, 1]);
find(3, [2]);
find(5, [1, 2, 4]);
