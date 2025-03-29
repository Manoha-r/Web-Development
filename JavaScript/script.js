let url = "http://universities.hipolabs.com/search?name=india&state-province=";

let button = document.querySelector("button");

let ol = document.querySelector("ol");

button.addEventListener("click", async() => {

    let input = document.querySelector("input").value;
    let colleges = await promise(input);
    printColleges(colleges);
});

function printColleges(colleges){
     ol.innerText="";
     for(let i of colleges){
        let li = document.createElement("li");
        li.innerText = "";
        li.innerText = i.name;
        ol.append(li);
     }
}

async function promise(country){
    let res = await axios.get(url+country);
    return res.data;
}
promise();