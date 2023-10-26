// Function to calculate the time
function calculateTime() {
    var currentDate = new Date(); // Get the current date
    var futureDate1 = new Date(); // Create a future date object for the first estimate
    var futureDate2 = new Date(); // Create a future date object for the second estimate
    
    // Add 4 days to the future date 1
    futureDate1.setDate(futureDate1.getDate() + 6);
    
    // Add 11 days to the future date 2
    futureDate2.setDate(futureDate2.getDate() + 14);
    
    // Format the result as "MMM DD" string
    var result1 = futureDate1.toLocaleString('default', { month: 'short', day: 'numeric' });
    var result2 = futureDate2.toLocaleString('default', {day: 'numeric' });
    
    // Get all the elements with the class "timeDisplay"
    var timeDisplays = document.getElementsByClassName("artwall-time");
    
    // Loop through each element and set the inner text
    for (var i = 0; i < timeDisplays.length; i++) {
      timeDisplays[i].innerText = "Delivery:"+"\n"+ result1 + "-" + result2; 
    }
  }
  
  // Call the calculateTime function when the page loads
  calculateTime(); 