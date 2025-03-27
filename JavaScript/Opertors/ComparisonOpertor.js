let a=1;
let y='1';
//equality operator is used for comaparing two values without any use of data type
if(a==y){
    console.log("both values are equal");
}
//inequality returns if values or not equal
if(a!=y){
    console.log("both values are not equal");
}
//strictly equality operator is used for comparing two values with data type
let b=1;
if(a===b){
    console.log("both values are equal",a,b);
}
//strictly not equal operator is used for comparing two values with data type
if(a!==y){
    console.log("both values or not equal : ",a,y);
}

//less than operator is used for comaparing two values if right-side value is less than the left-side value it returns true
if(a<b){
    console.log("a is less than b");
}
//greater than operator is used for comaparing two values if right-side value is greater than the
if(b>a){
    console.log("b is greater than a");
}
if(a<=b){
    console.log("a is less than or equal to b");
}
if(a>=b){
    console.log("a is greater than or equal to b");
}