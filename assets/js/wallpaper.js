var day1 = document.getElementById("day1");
var night1 = document.getElementById("night1");
var day2 = document.getElementById("day2");
var night2 = document.getElementById("night2");

function setColor(color) {
  const elements = document.querySelectorAll('h1, h2, h3, p');
  for (const element of elements) {
    element.style.color = color;
  }
}


function reset() {
    console.log("wpOn reset");
    document.querySelectorAll(".selbutton").forEach(function(element){
        element.classList.add("day");
        element.classList.remove("night");
    });
    night1.style.opacity = "0";
    night2.style.opacity = "0";
    day1.style.opacity = "1";
    day2.style.opacity = "1";
  setColor('rgb(57, 34, 39)');
        document.querySelectorAll(".textshadow").forEach(function(element){
        element.classList.add("textshadow-day");
        element.classList.remove("textshadow-night");
    });
    
}

function wpDay() {
    console.log("on");
    document.querySelectorAll(".selbutton").forEach(function(element){
        element.classList.add("day");
        element.classList.remove("night");
    });
    night1.style.opacity = "0";
    night2.style.opacity = "0";
    day1.style.opacity = "1";
    day2.style.opacity = "1";
  setColor('rgb(57, 34, 39)');
    
            document.querySelectorAll(".textshadow").forEach(function(element){
        element.classList.add("textshadow-day");
        element.classList.remove("textshadow-night");
    });

    
    
}

function wpNight() {
    console.log("off");
    document.querySelectorAll(".selbutton").forEach(function(element){
        element.classList.add("night");
        element.classList.remove("day");
    });
    night1.style.opacity = "1";
    night2.style.opacity = "1";
    day1.style.opacity = "0";
    day2.style.opacity = "0";
  setColor('rgb(247,184,232)');
            document.querySelectorAll(".textshadow").forEach(function(element){
        element.classList.add("textshadow-night");
        element.classList.remove("textshadow-day");
    });
    
    
}


