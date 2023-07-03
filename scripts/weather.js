function getShortWeatherDescription(description) {
    const weatherMap = {
      rain: 'Rainy',
      thunderstorm: 'Thunderstorm',
      drizzle: 'Drizzle',
      snow: 'Snowy',
      mist: 'Misty',
      fog: 'Foggy',
      haze: 'Hazy',
      smoke: 'Smoky',
      dust: 'Dusty',
      sand: 'Sandy',
      ash: 'Ashy',
      squalls: 'Squally',
      tornado: 'Tornado',
      clear: 'Clear',
      clouds: 'Cloudy'
      // Add more weather descriptions and their short forms as needed
    };
  
    for (const key in weatherMap) {
      if (description.includes(key)) {
        return weatherMap[key];
      }
    }
  
    // If no match is found, return the original description
    return description;
  }
  
  // Example usage:
  
  function setImage(shortDescription , img){
   
    img.src=`images/${shortDescription}.png`;
    console.log(img);


  }