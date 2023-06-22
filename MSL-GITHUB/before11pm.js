var currentDate = new Date();
var currentHour = currentDate.getHours();

// Check if the current hour is after 4 PM or before 1 AM
if (currentHour >= 16 || currentHour < 1) {
  var messageDivs = document.getElementsByClassName("message");
  for (var i = 0; i < messageDivs.length; i++) {
    var messageDiv = messageDivs[i];
    messageDiv.textContent = "Get it by tomorrow"; // Display "Get it by tomorrow" message
    messageDiv.style.display = "block"; // Show the message div
  }
} else {
  var messageDivs = document.getElementsByClassName("message");
  for (var i = 0; i < messageDivs.length; i++) {
    var messageDiv = messageDivs[i];
    messageDiv.textContent = "Get it before 11 PM"; // Display "Get it before 11 PM" message
    messageDiv.style.display = "block"; // Show the message div
  }
}