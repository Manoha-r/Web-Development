let student={
    name:"manu",
    age:20,
    class:"B.Tech"
};

//if you want create a clone of this object we use assign function
// there are two types to create clone of a object
//1.first declare the variable and then create clone using assign
//2.second one is declaration and initialize in one line using assign function
let s = {};
Object.assign(s, student);

let s1 = Object.assign({},student);

console.log("printing the student object : \n",student);

console.log("printing the s object : \n",s);

console.log("printing the s1 object : \n",s1);


// another way to create function clone is using structered clone
// it is faster than assign function

console.log("here this is from structuredClone function => \n")

let a = {
    carName:"BMW",
    carNo:8394,
    manufacturedPlacee:"India"
}

let b = structuredClone(a);

console.log( "printin b objec by usong : \n",b ); 