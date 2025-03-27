// Initialize an array
let arr = [1, 2, 3, 4, 5];

// Get the length of the array
console.log("Array length:", arr.length);

// Convert array to a string representation
console.log("toString method:", arr.toString());

// Join array elements with a separator "|"
console.log("join method:", arr.join(" | "));

// Concatenating two arrays
let arr1 = [6, 7, 8, 9, 10];
console.log("Concatenated array:", arr.concat(arr1));

// Push method: Adds an element to the end of the array
arr.push(11);
console.log("After push(11):", arr);

// Pop method: Removes the last element from the array
arr.pop();
console.log("After pop():", arr);

// Unshift method: Adds an element at the beginning of the array
arr.unshift(0);
console.log("After unshift(0):", arr);

// Shift method: Removes the first element from the array
arr.shift();
console.log("After shift():", arr);

//slice returns the new String from the start index to the end index
console.log("Slice:", arr.slice(0, 2));

//sort 
let a=[5,4,3,2,1];
console.log("sort method : "+a.sort());

//includes method return true or false if the element present in the array
console.log("includes method : "+a.includes(3));

//reverse
console.log(arr.reverse());

//indexOf returns the index of the first occurrence of the element in the array
console.log(arr.indexOf(2));