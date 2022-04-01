const iterate = (arr) => {
  let count = 0;
  let copyArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i-1]) {
      copyArr = arr.map(element => {return element});
      while(copyArr[i] < copyArr[i-1]){
        copyArr[i]++;
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

iterate([4, 2, 1, 7, 1]);
iterate([7,1,7,1]);
iterate([3,1,2,1,5,5,5]);
iterate([5,2,1,4,8]);
iterate([1,3,1,5,2]);