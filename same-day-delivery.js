function generatesameDeliveryTracker() {
  var deliveryTrackerHTML = `
    <div class="delivery-container">
      <div class="delivery-stage">
        <i class="fas fa-shopping-cart"></i>
        <h2 data-description="After you place your order, it will be prepared for same-day shipment.">Order placed</h2>
        <p id="currentDate"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-truck"></i>
        <h2 data-description="MSL ships your order for same-day delivery.">Order ships</h2>
        <p id="orderShipsDate"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-check-circle"></i>
        <h2 data-description="Estimated to arrive at your doorstep today or tomorrow!">Delivered!</h2>
        <p id="deliveryDate"></p>
      </div>
    </div>
  `;

  document.getElementById("delivery-tracker-same-day").innerHTML = deliveryTrackerHTML;

  var currentDate = new Date();
  document.getElementById("currentDate").textContent = formatDate(currentDate);

  var cutOffTime = new Date();
  cutOffTime.setHours(16, 0, 0); // Set the cutoff time to 4 PM

  var orderShipsDate = "Today";
  document.getElementById("orderShipsDate").textContent = orderShipsDate;

  var deliveryTime = "Before 11PM";
  if (currentDate >= cutOffTime) {
    // If the current time is after or at the cutoff, set the delivery time to tomorrow
    var tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);
    deliveryTime = "Tomorrow";
    if (tomorrowDate.getDay() === currentDate.getDay()) {
      deliveryTime = "Tomorrow (8pm-11pm)";
    }
  }
  document.getElementById("deliveryDate").textContent = deliveryTime;

  function formatDate(date) {
    var month = date.toLocaleString("default", { month: "short" });
    var day = date.getDate();
    return month + " " + day;
  }
}

document.addEventListener("DOMContentLoaded", generatesameDeliveryTracker);

