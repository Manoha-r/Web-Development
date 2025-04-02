function saveToDb(data) {
    return new Promise( (resolve , reject) => {
        let randNum = Math.floor(Math.random()*10)+1;

        if(randNum > 4 ){
            resolve("data saved");
        } else {
            reject("data not saved");
        }
    });
}

saveToDb("helllo")
    .then( (msg) => {
        console.log(msg);
    })
    .catch( (msg) => {
        console.log(msg);
    });