const find = (limit, arr) => {
  // We create a reference value for our check
  let n = 0;
  let missingElement = "";
  // We have a range of numbers between 1 - n(limit)
  // We sort the array
  arr.sort((a, b) => {
    return a - b;
  });

  // We push the limit into the array
  arr.push(limit);

  // We check every element of the array to search for the missing number
  // The missing number will be +2 of n
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
};

find(5, [1, 2, 4]);
