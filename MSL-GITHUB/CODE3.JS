// Create a new div element for Rolled Prints
var rolledDiv = document.createElement('div');
rolledDiv.innerHTML = `


  <div class="lined-div">
    <h2 class="categorystyle">Types</h2>
    <hr>
  </div>

  <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Rolled Prints</h1>
  <div style="text-align: center;">
    <img src="https://i.postimg.cc/85wsM6GZ/Untitled-design-removebg-preview.png" alt="Rolled Prints" class="small-image" style="max-width: 300px; display: block; margin: 0 auto;">
  </div>
  <p class="custom-description questrial-class" style="text-align: center; padding-left: 10%; padding-right: 10%; margin: 0;">Printed materials rolled for transport. Resistant to damage. Water-resistant. Fade-proof. Yellowing-proof.</p>
`;

// Add a class to the new div
rolledDiv.classList.add('product-details');

// Append the new div after the previous one
var productDetailsDiv = document.querySelector('.product-details');
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

// Add a class to the new div
canvasDiv.classList.add('product-details');

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

// Add a class to the new div
framedDiv.classList.add('product-details');

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

// Create a new div element for Sizes
var sizesDiv = document.createElement('div');
sizesDiv.innerHTML = `
  <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Sizes:</h1>
  <table class="sizes-table">
    <tr>
      <th>Cm</th>
      <th>Inches</th>
    </tr>
    <tr>
      <td>20.32 cm x 25.4 cm</td>
      <td>8" x 10"</td>
    </tr>
    <tr>
      <td>30.48 cm x 40.64 cm</td>
      <td>12" x 16"</td>
    </tr>
    <tr>
      <td>30.48 cm x 45.72 cm</td>
      <td>12" x 18"</td>
    </tr>
    <tr>
      <td>40.64 cm x 50.8 cm</td>
      <td>16" x 20"</td>
    </tr>
    <tr>
      <td>45.72 cm x 60.96 cm</td>
      <td>18" x 24"</td>
    </tr>
    <tr>
      <td>60.96 cm x 91.44 cm</td>
      <td>24" x 36"</td>
    </tr>
  </table>
`;

// Add a class to the new div
sizesDiv.classList.add('product-details');

// Append the new div after the Framed Prints div
framedDiv.insertAdjacentElement('afterend', sizesDiv);

// CSS styles for the sizes-table
var tableStyle = document.createElement('style');
tableStyle.innerHTML = `
  .sizes-table {
    width: 100%;
    margin-top: 10px;
    border-collapse: collapse;
  }

  .sizes-table th,
  .sizes-table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .sizes-table th {
    font-weight: bold;
  }
`;
document.head.appendChild(tableStyle);

// Set margin-bottom for the 3rd div
sizesDiv.style.marginBottom = '90px';
