let promise = new Promise( (resolve , reject ) => {
    let randNum = Math.floor(Math.random() * 10) + 1;

    if(randNum > 4) {
        resolve("data was saved");
    } else {
        reject("data was not saved");
    }
});
//then are similar to the try if data was succefully sent then it goest to the then
// else the catch fucntion catches the exception  

//The .finally() method runs regardless of whether the promise was resolved or rejected.
promise.then( (msg) => {
        console.log(msg);
    })
    .catch( (msg) => {
        console.log(msg);
    })
    .finally( () => {
        console.log("successfully executed");
    })