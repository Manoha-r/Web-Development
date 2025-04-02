let num = [1 ,2 ,3 , 4];

let n = num.map((e) => e**2);

console.log(n);

let obj = [
    {
        name : "Manu",
        cgpa : 8.4
    },
    {
        name : "surya",
        cgpa : 7.8
    },
    {
        name : "shoban",
        cgpa : 9
    }
];

let arr = obj.map((item) => item.cgpa);

console.log(arr);