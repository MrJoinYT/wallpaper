// Get the switch input
const switchInput = document.querySelector('#switch-input');

// Add an event listener to the switch input
switchInput.addEventListener('change', function() {
    
  // If the switch is checked (day mode), set the body's background color to white and the text color to black
  if (this.checked) {
    
    wpDay();

  }
  // If the switch is not checked (night mode), set the body's background color to black and the text color to white
  else {
    wpNight();
  }
});

// Get the checkbox and toggle icon elements
const toggleIcon = document.getElementById('toggleIcon');
const icon = document.querySelector('.toggle-icon');

// Add an event listener to the checkbox that toggles the icon
toggleIcon.addEventListener('change', () => {
  if (toggleIcon.checked) {
    console.log("auto mode");
    icon.innerHTML = 'A'; // Change the icon to 'B' when it is checked
    icon.style.color = 'rgb(33,37,41)';
    checkSunriseSunset();
    if (document.getElementById('switch-input').checked) {
        document.getElementById('switch-input').click();
    } 
     
  } else {
      console.log("manual mode");
    icon.innerHTML = 'M'; // Change the icon back to 'A' when it is unchecked
    icon.style.color = 'rgb(247,167,161)'; 
      if (!document.getElementById('switch-input').checked) {
                document.getElementById('switch-input').toggle();
            }

      
      
      
      
  }
});