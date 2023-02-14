window.onload = function() {
    setInterval(updateClock, 100);
    updateClock();
    getSunriseSunset();
    checkSunriseSunset();
    startInterval();
    moveBackgroundImages();
    if (!document.getElementById('toggleIcon').checked) {
                document.getElementById('toggleIcon').click();
            }

    //    debugger;
    //  console.log("The window has finished loading!");
};

document.addEventListener("ready", function() {
  // your JavaScript code goes here
    reset();
});