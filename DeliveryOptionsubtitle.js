function generateDeliveryTracker(deliveryType, daysToPrepare, daysToShip, daysToDeliver) {
  var deliveryTrackerHTML = `
    <div class="delivery-container">
      <div class="delivery-stage">
        <i class="fas fa-shopping-cart"></i>
        <h2 data-description="After you place your order, it will take ${daysToPrepare} business days to prepare it for shipment.">Order placed</h2>
        <p id="currentDate${deliveryType}"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-truck"></i>
        <h2 data-description="MSL puts your order in the mail.">Order ships</h2>
        <p id="datePlus${daysToShip}"></p>
      </div>
      <div class="delivery-stage">
        <i class="fas fa-check-circle"></i>
        <h2 data-description="Estimated to arrive at your doorstep!">Delivered!</h2>
        <p id="datePlus${daysToDeliver}"></p>
      </div>
    </div>
  `;

  document.getElementById(`${deliveryType}-tracker`).innerHTML = deliveryTrackerHTML;

  var currentDate = new Date();
  document.getElementById(`currentDate${deliveryType}`).textContent = formatDate(currentDate);

  var shipDate = new Date();
  shipDate.setDate(currentDate.getDate() + daysToPrepare);
  var deliverStartDate = new Date();
  deliverStartDate.setDate(shipDate.getDate() + 1);
  var deliverEndDate = new Date();
  deliverEndDate.setDate(shipDate.getDate() + daysToDeliver);
  
  document.getElementById(`datePlus${daysToShip}`).textContent = formatDate(shipDate) + " - " + formatDate(deliverStartDate);
  document.getElementById(`datePlus${daysToDeliver}`).textContent = formatDate(deliverStartDate) + " - " + formatDate(deliverEndDate);

  function formatDate(date) {
    var month = date.toLocaleString('default', { month: 'short' });
    var day = date.getDate();
    return month + " " + day;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  generateDeliveryTracker("same", 0, 1, 1);
  generateDeliveryTracker("extended", 0, 3, 5);
  generateDeliveryTracker("otheritems", 0, 3, 18);
}); 