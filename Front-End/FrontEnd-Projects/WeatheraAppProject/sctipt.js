
let button = document.querySelector("button");

button.addEventListener('click',async() => {
    let value = document.querySelector("input").value;

    let data = await response(value);   

    printData(data);
});

function printData(data) {
    console.log(data);
    let temp = document.querySelector("#temp");
    let type = data.current.condition.text;
    changeBackground(type);
    temp.innerText = data.current.temp_c;
    
     let text = document.querySelector(".weather-para");
        text.innerText = data.current.condition.text;

        let icon = document.querySelector("#icon");
        let link = data.current.condition.icon; 
        icon.setAttribute("src",link);

        let localTime = data.location.localtime.split(" ")[1];

        let time = document.querySelector("#time");

        time.innerText = localTime;

        let date = document.querySelector("#date");
        let localDate = data.location.localtime.split(" ")[0];

        date.innerText = localDate;
}

function changeBackground(text){
    let container = document.querySelector(".container");

    let hoverOnBtn ="";
    if (text === "Sunny") {
        container.style.background = "linear-gradient(to bottom, #ffcc00, #ff6600)";
        hoverOnBtn = "linear-gradient(to bottom, #ffcc00, #ff6600)";
    } else if (text === "Clear") {
        container.style.background = "linear-gradient(to bottom, #2a2a72, #009ffd)";
        hoverOnBtn = "linear-gradient(to bottom, #2a2a72, #009ffd)";
    } else if (text === "Partly cloudy") {
        container.style.background = "linear-gradient(to bottom, #d7d2cc, #304352)";
        hoverOnBtn = "linear-gradient(to bottom, #d7d2cc, #304352)";
    } else if (text === "Cloudy") {
        container.style.background = "linear-gradient(to bottom, #a1c4fd, #c2e9fb)";
        hoverOnBtn = "linear-gradient(to bottom, #a1c4fd, #c2e9fb)";
    } else if (text === "Overcast") {
        container.style.background = "linear-gradient(to bottom, #616161, #9bc5c3)";
        hoverOnBtn = "linear-gradient(to bottom, #616161, #9bc5c3)";
    } else if (text === "Rain") {
        container.style.background = "linear-gradient(to bottom, #3a6186, #89253e)";
        hoverOnBtn = "linear-gradient(to bottom, #3a6186, #89253e)";
    } else if (text === "Drizzle") {
        container.style.background = "linear-gradient(to bottom, #4b79a1, #283e51)";
        hoverOnBtn = "linear-gradient(to bottom, #4b79a1, #283e51)";
    } else if (text === "Thunderstorm") {
        container.style.background = "linear-gradient(to bottom, #373b44, #4286f4)";
        hoverOnBtn = "linear-gradient(to bottom, #373b44, #4286f4)";
    } else if (text === "Snow") {
        container.style.background = "linear-gradient(to bottom, #ffffff, #a1c4fd)"; // ❄ Snow - White to Light Blue
        hoverOnBtn = "linear-gradient(to bottom, #ffffff, #a1c4fd)";
    } else if (text === "Light snow") {
        container.style.background = "linear-gradient(to bottom, #e0f7fa, #cfd9df)"; // 🌨 Light Snow - Soft Grayish Blue
        hoverOnBtn = "linear-gradient(to bottom, #e0f7fa, #cfd9df)";
    } else if (text === "Fog" || text === "Mist") {
        container.style.background = "linear-gradient(to bottom, #bdbbbd, #9e9e9e)";
        hoverOnBtn = "linear-gradient(to bottom, #bdbbbd, #9e9e9e)";
    } else if (text === "Haze") {
        container.style.background = "linear-gradient(to bottom, #d7d2cc, #d7d2cc)";
        hoverOnBtn = "linear-gradient(to bottom, #d7d2cc, #d7d2cc)";
    } else if (text === "Windy") {
        container.style.background = "linear-gradient(to bottom, #5d4157, #a8caba)";
        hoverOnBtn = "linear-gradient(to bottom, #5d4157, #a8caba)";
    }
    // else {
    //     container.style.background = "linear-gradient(to bottom, #2c3e50, #4ca1af)"; // Default Blue
    // }
    button.addEventListener('mouseover', () => {
        button.style.background = hoverOnBtn ;
    });

    button.addEventListener('mouseout',() => {
        button.style.background = "transparent";
    })
}



async function response(country){
    try{
    let res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=40dc419f4e9d4b6b9b471729252903&q=${country}`);

    let data =  res.data;
    return data;
    }
    catch(e){
        console.log("Erroe : "+e);
    }
}

