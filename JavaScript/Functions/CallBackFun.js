function ask(question,yes,no){
    if(question){
        yes();
    }
    else{
        no();
    }
}
ask(false
    ,function(){console.log("Yes is called ")}
    ,function(){console.log("No is called")}
);