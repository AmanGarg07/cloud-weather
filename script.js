// let apikey = "f32bea804a3d2758be0de65a7369c0a2";
let apikey = "c961886e4779c69fa231e6672fb06257"; 

function fetch_weather(cityname){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apikey}`)
    .then((response) => {
        if(!response.ok){
            alert("City Not Found :( " );
            throw new error("City Not Found.")
        }
        return response.json();
    })
    .then((data) => display_data(data));
}

function display_data(data){
    let cname = data.name;
    let icon = data.weather[0].icon;
    let desc = data.weather[0].description;
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let speed = data.wind.speed;

    document.querySelector(".city").innerText = "Weather in " + cname;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = desc;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${cname}')`;
}

function search_weather(){
    fetch_weather(document.querySelector(".search-bar").value);
}

document.querySelector(".search button").addEventListener("click",function(){
    search_weather();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        search_weather();
    }
})

fetch_weather("delhi");