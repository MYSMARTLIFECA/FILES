    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    if (currentHour < 16) { // 4 PM is represented as 16 in the 24-hour format
      var messageDiv = document.getElementById("message");
      messageDiv.innerText = "Get it before 11PM";
      messageDiv.style.display = "block";
    }
