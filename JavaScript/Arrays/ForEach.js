let obj = [
    { name : "Manu",
        id : 1
    },
    {
        name : "surya",
        id : 2
    },
    {
        name : "shoban",
        id : 3
    }
];
obj.forEach((item , index) =>{
    console.log(`students names are ${item.name} at index ${index}`);
});