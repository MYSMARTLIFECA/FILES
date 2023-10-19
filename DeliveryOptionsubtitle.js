//for same day delivery


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

  document.getElementById("delivery-tracker").innerHTML = deliveryTrackerHTML;

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



// for normal delivery


function generateDeliveryTrackerExtended() {
  var deliveryTrackerHTML = `
    <div class="delivery-container">
      <div class="delivery-stage">
        <i class="fas fa-shopping-cart"></i>
        <h2 data-description="After you place your order, it will take 1-3 business days to prepare it for shipment.">Order placed</h2>
        <p id="currentDateExtended"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-truck"></i>
        <h2 data-description="MSL puts your order in the mail.">Order ships</h2>
        <p id="datePlusThreeToFive"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-check-circle"></i>
        <h2 data-description="Estimated to arrive at your doorstep!">Delivered!</h2>
        <p id="datePlusEightToEleven"></p>
      </div>
    </div>
  `;


  document.getElementById("delivery-tracker-extended").innerHTML = deliveryTrackerHTML;

  var currentDate = new Date();

  document.getElementById("currentDateExtended").textContent = formatDate(currentDate);

  var datePlusThreeToFive = new Date();
  datePlusThreeToFive.setDate(currentDate.getDate() + 1);
  var datePlusFive = new Date();
  datePlusFive.setDate(currentDate.getDate() + 4);
  document.getElementById("datePlusThreeToFive").textContent = formatDate(datePlusThreeToFive) + " - " + formatDate(datePlusFive);

  var datePlusEightToEleven = new Date();
  datePlusEightToEleven.setDate(currentDate.getDate() + 6);
  var datePlusEleven = new Date();
  datePlusEleven.setDate(currentDate.getDate() + 12);
  document.getElementById("datePlusEightToEleven").textContent = formatDate(datePlusEightToEleven) + " - " + formatDate(datePlusEleven);

  function formatDate(date) {
    var month = date.toLocaleString('default', { month: 'short' });
    var day = date.getDate();
    return month + " " + day;
  }
}

document.addEventListener('DOMContentLoaded', generateDeliveryTrackerExtended);


//other items


function generateDeliveryTrackerforotheritems() {
  var deliveryTrackerHTML = `
    <div class="delivery-container">
      <div class="delivery-stage">
        <i class="fas fa-shopping-cart"></i>
        <h2 data-description="After you place your order, it will take 1-4 business days to prepare it for shipment.">Order placed</h2>
        <p id="currentDate"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-truck"></i>
        <h2 data-description="MSL puts your order in the mail.">Order ships</h2>
        <p id="datePlusThreeToFive"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-check-circle"></i>
        <h2 data-description="Estimated to arrive at your doorstep!">Delivered!</h2>
        <p id="datePlusEightToEleven"></p>
      </div>
    </div>
  `;

  document.getElementById("otheritems").innerHTML = deliveryTrackerHTML;

  var currentDate = new Date();

  document.getElementById("currentDate").textContent = formatDate(currentDate);

  var datePlusThreeToFive = new Date();
  datePlusThreeToFive.setDate(currentDate.getDate() + 1);
  var datePlusFive = new Date();
  datePlusFive.setDate(currentDate.getDate() + 4);
  document.getElementById("datePlusThreeToFive").textContent = formatDate(datePlusThreeToFive) + " - " + formatDate(datePlusFive);

  var datePlusEightToEleven = new Date();
  datePlusEightToEleven.setDate(currentDate.getDate() + 6);
  var datePlusEleven = new Date();
  datePlusEleven.setDate(currentDate.getDate() + 18);
  document.getElementById("datePlusEightToEleven").textContent = formatDate(datePlusEightToEleven) + " - " + formatDate(datePlusEleven);

  function formatDate(date) {
    var month = date.toLocaleString('default', { month: 'short' });
    var day = date.getDate();
    return month + " " + day;
  }
}

document.addEventListener('DOMContentLoaded', generateDeliveryTrackerforotheritems);
 