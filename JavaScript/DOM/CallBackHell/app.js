let h2 = document.querySelector("h2");

function changeColor(color, delay, nextColor){
    setTimeout( () => {
        h2.style.color = color;
        nextColor();
    },delay);
}

changeColor("red" , 1000 , () =>{
    changeColor("blue", 1000 , () =>{
        changeColor("green" , 1000 , () =>{
            changeColor("pink" , 1000);
        });
    });
});