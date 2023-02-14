function moveBackgroundImages() {
  // First, we need to select the element(s) with the background image(s)
  const elements = document.querySelectorAll('.image img');

  // Next, we need to set up an event listener for mouse movement
  document.addEventListener('mousemove', (event) => {
    
    
    //ADJUST THESE VALUES SO THEY FIT YOUR SCREEN
    
    // Calculate the maximum amount to move the background image
    const maxX = window.innerWidth / 20; //These might not work for you.
    const maxY = window.innerHeight / 40; //These might not work for you.

    // Calculate the amount to move the background image based on the mouse position
    // You can play around with the values to get the desired effect
    const x = Math.min((event.clientX * -1 / 40), maxX); //These might not work for you.
    const y = Math.min((event.clientY * -1 / 80), maxY); //These might not work for you.

    // Loop through each element with a background image
    elements.forEach((element) => {
      // Update the element's position
      element.style.top = `${y}px`;
      element.style.left = `${x}px`;
    });
  });
}

// Call the function to start the background image movement
moveBackgroundImages();