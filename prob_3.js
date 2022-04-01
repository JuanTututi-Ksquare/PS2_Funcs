const ulam = [
  [1, 2, 9, 10, 25],
  [4, 3, 8, 11, 24],
  [5, 6, 7, 12, 23],
  [16, 15, 14, 13, 22],
  [17, 18, 19, 20, 21],
];

let value = 0;
let undef = 'Invalid pos';
let result = [];

const check = (arr) => {
    arr.forEach(element => {
        y = element[0] - 1;
        x = element[1] - 1;
        try {
            result.push(ulam[y][x]);
        } catch(error) {
            result.push(undef);
        }
    });
    console.log(result);
};

check([[2, 3], [4, 2], [6, 1]]);