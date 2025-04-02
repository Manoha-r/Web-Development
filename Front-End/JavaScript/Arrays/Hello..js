let arr = [ 1, 2, 3, 4];

arr.splice(1,2,3);

console.log(arr);

console.log(arr[2]);

let a = arr.slice(0);

console.log(a);

console.log(a.concat([5,6]));

console.log(a);


a.forEach(function(item , index){
    console.log(`${item} is at index ${index}`);
});

let obj = [
    { name : "Manu",
        id : 1
    },
    {
        name : "surya",
        id : 2
    },
    {
        name : "shoban",
        id : 3
    }
];
obj.forEach((item , index) =>{
    console.log(`students names are ${item.name} at index ${index}`);
});