document.getElementById("question-mark").addEventListener("click", function() {
    var notification = document.getElementById("explanation");
    notification.style.display = "block";
  });
  
  document.getElementById("close-notification").addEventListener("click", function() {
    var notification = document.getElementById("explanation");
    notification.style.display = "none";
  });