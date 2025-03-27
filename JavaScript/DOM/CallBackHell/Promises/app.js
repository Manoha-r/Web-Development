function saveToDb(data){
    return new Promise( (resolved , rejected) => {
        let rand = Math.floor(Math.random() * 10 ) + 1;

        if(rand > 4){
            resolved("Resolved : data was added");
        } else {
            rejected("Rejected  : data was not added");
        }
    });
}

saveToDb("hello")
.then( () => console.log("resolved was executed"))
.catch( () => console.log("rejected was executed"))