// <> <> The ApiKey has be taken from the website "openweathermap.com"

let weather = {
    'apikey':'8c2e3e940c36132c55c0a5b07c6c327c',
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=metric&appid="
        + this.apikey 
        ).then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
   },
   displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name,icon, description,temp, humidity,speed);

    // now let use some JS propreties to fetch datas from open weather website 
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "℃";
    document.querySelector(".humidity").innerText ="humidity: " +humidity+"%";
    document.querySelector(".wind").innerText =" Wind speed: " +speed+ "km/h";
    document.querySelector(".weather").classList.remove("loading");
   },
   search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
   },
};

document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("libreville");


// I have to improve my code commenting skill so that people read my code easly !!! 
//......... >> ????>>>>>This is a comments /////...............
//......... >> ????>>>>>This is a comments /////............... 