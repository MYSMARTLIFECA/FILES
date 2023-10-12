  // Create a new div element for Rolled Prints
  var rolledDiv = document.createElement('div');
  rolledDiv.innerHTML = `
    <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Rolled Prints</h1>
    <div style="text-align: center;">
      <img src="https://i.postimg.cc/85wsM6GZ/Untitled-design-removebg-preview.png" alt="Rolled Prints" class="small-image" style="max-width: 300px; display: block; margin: 0 auto;">
    </div>
    <p class="custom-description questrial-class" style="text-align: center; padding-left: 10%; padding-right: 10%; margin: 0;">Printed materials rolled for transport. Resistant to damage. Water-resistant. Fade-proof. Yellowing-proof.</p>
  `;

  // Add an ID to the new div
  rolledDiv.id = 'rolled-prints';

  // Append the new div after the previous one
  var productDetailsDiv = document.getElementById('product-detailss');
  productDetailsDiv.insertAdjacentElement('afterend', rolledDiv);

  // Create a new div element for Canvas
  var canvasDiv = document.createElement('div');
  canvasDiv.innerHTML = `
    <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Canvas</h1>
    <div style="text-align: center;">
      <img src="https://i.postimg.cc/x1HrWVXQ/Stretched3-600x-1-removebg-preview.png" alt="Canvas" class="small-image" style="max-width: 300px; display: block; margin: 0 auto;">
    </div>
    <p class="custom-description questrial-class" style="text-align: center; padding-left: 10%; padding-right: 10%; margin: 0;">Durable material for creating artworks. Depth to any room. Ready to hang. Sourced sustainably.</p>
  `;

  // Add an ID to the new div
  canvasDiv.id = 'canvas';

  // Append the new div after the Rolled Prints div
  rolledDiv.insertAdjacentElement('afterend', canvasDiv);

  // Create a new div element for Framed Prints
  var framedDiv = document.createElement('div');
  framedDiv.innerHTML = `
    <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Framed Prints</h1>
    <div style="text-align: center;">
      <img src="https://i.postimg.cc/mgTq61WY/Framed-Print2-600x-removebg-preview.png" alt="Framed Prints" class="small-image" style="max-width: 300px; display: block; margin: 0 auto;">
    </div>
    <p class="custom-description questrial-class" style="text-align: center; padding-left: 10%; padding-right: 10%; margin: 0;">Printed materials mounted and framed. Elegant decor. Handcrafted wood frames. Crystal-clear plexiglass.</p>
  `;

  // Add an ID to the new div
  framedDiv.id = 'framed-prints';

  // Append the new div after the Canvas div
  canvasDiv.insertAdjacentElement('afterend', framedDiv);

  // CSS styles for the questrial-class
  var style = document.createElement('style');
  style.innerHTML = `
    .questrial-class {
      font-family: 'Questrial', sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }
  `;
  document.head.appendChild(style);
