async function getWeather(apiKey, city) {
  const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
  const params = {
    q: city,
    appid: apiKey,
    units: "metric", // Use "imperial" for Fahrenheit
  };

  const url = baseUrl + new URLSearchParams(params).toString();

  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);

    if (weatherData.cod === 200) {
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const humidity = weatherData.main.humidity;
      const speed = weatherData.wind.speed;
      console.log(speed);
      
    
      console.log(`Weather in ${city}:`);
      var cityIdElement = document.querySelector('.city .city_id');

      cityIdElement.textContent=city;
      
      console.log(`Temperature: ${temperature}°C`);
      
      var cityTemp = document.querySelector('.temp #value');
     
      cityTemp.textContent =`${temperature}° C`;
      if(temperature > 40){
        cityTemp.style.color="red";  
        
      }
     

      console.log(`Description: ${description}`);
     // var cityIdElement = document.querySelector('');
     var description_p=document.getElementById('description');
     description_p.textContent=description;

     const img = document.querySelector('.image');
    

    let shortDescription = getShortWeatherDescription(description);
    setImage(shortDescription , img);
     


      console.log(`Humidity: ${humidity}%`);
      var humidity_p=document.getElementById('humidity_p');
      humidity_p.textContent=` ${humidity}%`
      console.log(humidity_p);

      var speed_p=document.getElementById('speed_p');
      speed_p.textContent=`${speed}m/s`;
    } else {
      console.log(`Error: ${weatherData.message}`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
    


}

// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = "8ea4cc922e03c0b69346296439afcbb3";

// Enter the name of the city you want to get weather information for





document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById('btn');
    var text = document.getElementById('input');
  
    btn.onclick = (event) => {
     getWeather(apiKey, text.value);
      
    };
  });
  document.addEventListener("DOMContentLoaded", function() {
    var mode = document.getElementById('mode_img');
   
  
    mode.onclick = (event) => {
        var body = document.body;
        body.classList.toggle("dark");
        
        if( body.classList.contains("dark")){
          mode.src="images/light.png";
        }
        else
        mode.src="images/dark.png";
      
    };
  });
