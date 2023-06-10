// Create a new div element for Rolled Prints
var rolledDiv = document.createElement('div');
rolledDiv.innerHTML = `
  <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Rolled Prints</h1>
  <div style="text-align: center;">
    <img src="https://i.ibb.co/zn6WfmR/rolledprintsfinal3-600x.jpg" alt="Rolled Prints" class="small-image" style="max-width: 300px; display: block; margin: 0 auto;">
  </div>
  <p class="custom-description questrial-class" style="text-align: center; padding-left: 10%; padding-right: 10%; margin: 0;">Printed materials rolled for transport. Resistant to damage. Water-resistant. Fade-proof. Yellowing-proof.</p>
`;

// Add an ID to the new div
rolledDiv.id = 'rolled-prints';

// Create a new div element for Canvas
var canvasDiv = document.createElement('div');
canvasDiv.innerHTML = `
  <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Canvas</h1>
  <div style="text-align: center;">
    <img src="https://i.ibb.co/z6NDfW6/Stretched3-600x-1.jpg" alt="Canvas" class="small-image" style="max-width: 300px; display: block; margin: 0 auto;">
  </div>
  <p class="custom-description questrial-class" style="text-align: center; padding-left: 10%; padding-right: 10%; margin: 0;">Durable material for creating artworks. Depth to any room. Ready to hang. Sourced sustainably.</p>
`;

// Add an ID to the new div
canvasDiv.id = 'canvas';

// Create a new div element for Framed Prints
var framedDiv = document.createElement('div');
framedDiv.innerHTML = `
  <h1 class="Heading Desktop-TextAlignLeft" style="font-size: 1.2em; text-align: center; color: black; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Framed Prints</h1>
  <div style="text-align: center;">
    <img src="https://i.ibb.co/gDvy4Nb/Framed-Print2-600x.jpg" alt="Framed Prints" class="small-image" style="max-width: 300px; display: block; margin: 0 auto;">
  </div>
  <p class="custom-description questrial-class" style="text-align: center; padding-left: 10%; padding-right: 10%; margin: 0;">Printed materials mounted and framed. Elegant decor. Handcrafted wood frames. Crystal-clear plexiglass.</p>
`;

// Add an ID to the new div
framedDiv.id = 'framed-prints';

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

// Add an ID to the new div
sizesDiv.id = 'sizes';

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

// Create a container div for the three divs
var containerDiv = document.createElement('div');
containerDiv.style.display = 'flex';
containerDiv.style.flexWrap = 'wrap';
containerDiv.style.justifyContent = 'center';

// Append the container div after the previous one
var sizesDiv = document.getElementById('sizes');
sizesDiv.insertAdjacentElement('afterend', containerDiv);

// Append the three divs to the container div
containerDiv.appendChild(rolledDiv);
containerDiv.appendChild(canvasDiv);
containerDiv.appendChild(framedDiv);