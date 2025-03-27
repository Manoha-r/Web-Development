let num = 100000;
//the above the one is same is num = 1e5; => num = 1*100000;


let n = 0.00002;
//the above one is same as the num = 2e-5; => num = 2*10^-5;

//there are some built in function in javascript number type

/* there are
    1.Math.floor(val) : it's give the floor value like 2.7 becomes the 2
    2.Math.ceil(val) : it's give the ceil value like 2.7 becomes the 3;
    3.Math.round(val) : the round function returns the nearest value like if value is less tha 2.5 it returns 2 otherwis it returns 3;
    4.Math.trun(val) : Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
    5.Math.abs(val) : it's give the absolute value of the number like -2 becoms the 2;
    6.Math.max(val1,val2) : it's give the max value of the number
    7.Math.min(val1,val2) : it's give the min value of the number
    8.Math.pow(val1,val2) : it's give the power of the number lik
    9.Math.sqrt(val) : it's give the square root of the number like 16
    10.Math.random() : it's give the random number between 0 and 1
*/

num = 3.4;

console.log("1. floor function : "+Math.floor(num));

console.log("2. ceil function : "+Math.ceil(num));

console.log("3. round function : "+Math.round(num));

console.log("4. trun function : "+Math.trunc(num));

console.log("5. absolute function : "+Math.abs(-2));

console.log("6. max function : "+Math.max(num,3));

console.log("7. min function : "+Math.min(num,3));

console.log("8. power function : "+Math.pow(2,3));

console.log("9. sqrt function : "+Math.sqrt(16));

console.log("10. random function : "+Math.random()*100);


// Number function also have their function

/* 1. toFixed(val) 
    2.isNan(val);
    3.isFinite(val);
    4.parseInt(val);
    5.parseFloat(val);
*/

let sum = 0.1 + 0.2;

let str = "hello";
console.log("1. toFixed function : "+sum.toFixed(3));

console.log("2. isNan function : "+ isNaN(sum));

console.log("3 . isFinite function : "+isFinite(str))

console.log("4. parseInt function : "+parseInt(sum));

console.log("5. parseFloat function : "+parseFloat(sum));
