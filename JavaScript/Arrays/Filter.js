//filter function used for filtering the elements in array

let arr = [ 1, 2, 3, 4];


let n = arr.filter((item) => item % 2 == 0 || item <= 3);

console.log(n);