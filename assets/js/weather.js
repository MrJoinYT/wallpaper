async function getSunriseSunset(latitude, longitude) {
    console.log("Fetching Sunsrise...");
    // Make a request to the sunrise-sunset API using the specified latitude and longitude
    const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;
    const response = await fetch(url);
    const data = await response.json();
    // Parse the response to get the sunrise and sunset times
    const sunrise = data.results.sunrise;
    const sunset = data.results.sunset;
    // Convert the sunrise and sunset times to Date objects
    const sunriseTime = new Date(sunrise);
    const sunsetTime = new Date(sunset);
    return { sunriseTime, sunsetTime };
}
async function checkSunriseSunset() {
    const toggleIcon = document.getElementById('toggleIcon');
    if (toggleIcon.checked) {
    console.log("Converting Sunrise.");
    const currentTime = new Date();

    const latitude = YOUR_LAT;
    const longitude = YOUR_LONG;

    const { sunriseTime, sunsetTime } = await

        getSunriseSunset(latitude, longitude);
    console.log("rise: ", sunriseTime);
    console.log("set: ", sunsetTime);

    
        if (currentTime >= sunriseTime && currentTime < sunsetTime) {
            // Sun is risen
            wpDay();

            if (!document.getElementById('switch-input').checked) {
                document.getElementById('switch-input').click();
            }
        } else {
            // Sun is not risen
            wpNight();
            if (document.getElementById('switch-input').checked) {
                document.getElementById('switch-input').toggle();
            }

        }
    } else {
        console.log("manual Mode is active.");
    }

}


function startInterval() {
    console.log("trying Sun check in 3minutes.");
    // Execute the checkSunriseSunset function every 3 minutes
    setInterval(checkSunriseSunset, 1000 * 60 * 3);
    setInterval(getSunriseSunset, 1000 * 60 * 3);
    console.log("Starting Sun Interval...");
}

// To start the interval, you can call the startInterval function
startInterval();