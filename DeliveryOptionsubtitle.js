function generateDeliveryTracker(deliveryType, preparationDays, shippingDays, deliveryDays) {
  var deliveryTrackerHTML = `
    <div class="delivery-container">
      <div class="delivery-stage">
        <i class="fas fa-shopping-cart"></i>
        <h2 data-description="After you place your order, it will take ${preparationDays} business days to prepare it for shipment.">Order placed</h2>
        <p id="currentDate"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-truck"></i>
        <h2 data-description="MSL puts your order in the mail.">Order ships</h2>
        <p id="orderShipsDate"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-check-circle"></i>
        <h2 data-description="Estimated to arrive at your doorstep!">Delivered!</h2>
        <p id="deliveryDate"></p>
      </div>
    </div>
  `;

  var currentDate = new Date();
  var currentElement = document.getElementById("currentDate");
  var orderShipsElement = document.getElementById("orderShipsDate");
  var deliveryDateElement = document.getElementById("deliveryDate");

  document.getElementById(deliveryType).innerHTML = deliveryTrackerHTML;
  currentElement.textContent = formatDate(currentDate); 

  var orderShipsDate = new Date();
  orderShipsDate.setDate(currentDate.getDate() + preparationDays);
  orderShipsElement.textContent = formatDate(orderShipsDate);

  var deliveryTime = formatDate(orderShipsDate);
  var deliveryDate = new Date(orderShipsDate);
  deliveryDate.setDate(orderShipsDate.getDate() + shippingDays);
  deliveryTime += " - " + formatDate(deliveryDate);
  deliveryDateElement.textContent = deliveryTime;

  function formatDate(date) {
    var month = date.toLocaleString("default", { month: "short" });
    var day = date.getDate();
    return month + " " + day;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  generateDeliveryTracker("delivery-tracker", 0, 0, 0); // For same-day delivery
  generateDeliveryTracker("delivery-tracker-extended", 1, 3, 8); // For normal delivery
  generateDeliveryTracker("otheritems", 1, 4, 18); // For other items
});
