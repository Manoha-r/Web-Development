function Calculator() {

    this.read = function (){
        this.a = 10;
        this.b = 20;
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let cal = new Calculator();

cal.read();

console.log("sum : " + cal.sum());

console.log("mul : " +cal.mul());