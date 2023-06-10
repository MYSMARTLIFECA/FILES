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
    datePlusThreeToFive.setDate(currentDate.getDate() + 4);
    var datePlusFive = new Date();
    datePlusFive.setDate(currentDate.getDate() + 5);
    document.getElementById("datePlusThreeToFive").textContent = formatDate(datePlusThreeToFive) + " - " + formatDate(datePlusFive);

    var datePlusEightToEleven = new Date();
    datePlusEightToEleven.setDate(currentDate.getDate() + 6);
    var datePlusEleven = new Date();
    datePlusEleven.setDate(currentDate.getDate() + 15);
    document.getElementById("datePlusEightToEleven").textContent = formatDate(datePlusEightToEleven) + " - " + formatDate(datePlusEleven);

    function formatDate(date) {
      var month = date.toLocaleString('default', { month: 'short' });
      var day = date.getDate();
      return month + " " + day;
    }
  }

  document.addEventListener('DOMContentLoaded', generateDeliveryTrackerforotheritems);
