let arr=[];
let arr1=[1,2,3,4,5];
console.log(arr);
console.log(arr1);


//iterating by print each element separately
for(let i=0;i<arr1.length;i++){
    console.log(arr[i]);
}
//accessing element in array
console.log(arr1[0]);
console.log(arr[arr.lenght]);

//modifying array
arr1[0]=9;
console.log(arr1);

arr1.push(9);
console.log(arr1);
arr1.unshift(10);
console.log(arr1);

arr1.length=3;
console.log(arr1);

//iterating by print each element separately
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
let longArray=arr.concat(arr1);
console.log(longArray.toString());


//find the every element in arrays is divisible with 10
let array = [2, 3, 4, 5, 6, 8];

let ans = array.every( (ele) => ele % 10 == 0);

console.log(ans);

// returning the minimum number in array

let min = array.reduce( (min , ele ) => min < ele ? min : ele);

console.log(min);