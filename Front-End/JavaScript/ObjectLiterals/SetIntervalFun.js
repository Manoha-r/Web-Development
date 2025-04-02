//setInterval executes block of program every 2 or specified seconds

console.log("before the function setInterval");

setInterval( () => {
    console.log("Runs every 2 seconds ");
},2000);


console.log("after the function setInterval ");

let id = setInterval( () => {
    console.log("Runs every 3 seconds ");
},2000);

//clearInterval(id) to stop the function from running every 2 seconds

clearInterval(id);

