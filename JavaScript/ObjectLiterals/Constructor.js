//constructor first name starts with capital letter this will be accessed by using new keyword

function User(name,age) {
    this.name=name;
    this.age=age;
    console.log(name,age);
}

new User("manu",29);

//methods in constructor

function User(name) {
    this.name = name;
    this.sayH = function() { 
        console.log("my name is "+this.name);
    };
}

let user  = new User("manu");

user.sayH();
