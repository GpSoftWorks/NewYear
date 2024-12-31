// Set the date for New Year (January 1st, 2025)
const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the remaining time
  const distance = newYearDate - now;
  
  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is finished, show the New Year message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Happy New Year 2025!";
    document.body.style.background = "linear-gradient(to top, #1f1c2c, #928DAB)"; // You can change the background here if desired
    document.body.style.color = "#ffcc00"; // Set text color for the New Year message
  }
}, 1000);
