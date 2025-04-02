// it returns true if the every vlaue in the array satisfy the condition else false it follow the And gate

let arr = [1, 2, 4, 6, 8];

let val = arr.every( (item) => item % 2 == 0);

console.log(val); 

// and aslo have a function named some it returns true if one value is satisfied in the array otherwise false

let a = [1, 2, 3, 4];

let flag = a .some( (item) => item % 2 == 0);

console.log(flag);
