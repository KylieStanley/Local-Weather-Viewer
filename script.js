 var lat;
 var long;


//Get user location
function geoSuccess(position) {

	lat = position.coords.latitude;
    long = position.coords.longitude;

var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=6071b4125e83bfc05c68befdb6ea41f8&units=imperial";
      
	fetch(url)
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
			displayLocation(data.name);
			displayTemp(data.main.temp);
			displayWeather(data.weather[0].description);
			toggleBackground(data.weather[0].main);
			})
			.catch(function() {
				console.log("An error occurred!");
		})
	
}	
  navigator.geolocation.getCurrentPosition(geoSuccess);

  //display user's City
function displayLocation(location) {
	var locationText = document.querySelector('#location');
	locationText.textContent = location;
};

//display current temperature
function displayTemp(temperature) {
	//display temp in F
	var temp = document.querySelector('#temp');
	var far = Math.round(temperature) + ' \xB0F'
	var cel = Math.round((temperature - 32) * (5/9)) + ' \xB0C'
	temp.textContent = far;

	//toggle F and C
	temp.addEventListener("click", function() {
		if (temp.textContent === far) {
			temp.textContent = cel;
		} 
		 else {
			temp.textContent = far;
		}
	});
};

//Display location's weather
function displayWeather(weather) {
	var weatherType = document.querySelector('#weather');
	weatherType.textContent = weather;
};


//Change background depending on weather
function toggleBackground(weatherDesc) {
	var weather = document.querySelector("html");

switch(weatherDesc) {
	case "Clear": 
		weather.classList.toggle("clear");
		break;	
	case "Clouds":
		weather.classList.toggle("clouds");
		break;
	case "Thunderstorm":
		weather.classList.toggle("thunderstorm");
		break;
	case "Snow":
		weather.classList.toggle("snow");
		break;
	case "Rain":
		weather.classList.toggle("rain");
		break;
	case "Drizzle":
		weather.classList.toggle("rain");
		break;
	default: 
		weather.classList.toggle("clear");
		break;	
	}	
};
	

// var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=6071b4125e83bfc05c68befdb6ea41f8&units=imperial";
   