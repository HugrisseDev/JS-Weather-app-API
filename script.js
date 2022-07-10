let weather = {
    'apikey':'8c2e3e940c36132c55c0a5b07c6c327c',
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=metric&appid="
        + this.apikey 
        ).then((Response) => Response.json())
        .then((data) => console.log(data));
   },
   displayWeather: function(data) {

   }
};
