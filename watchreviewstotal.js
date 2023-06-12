const ratingContainer = document.getElementById('ratingContainer');

const divElement = document.createElement('div');
divElement.className = 'ratingP';

const spanElement = document.createElement('span');
spanElement.style.color = 'black';
spanElement.textContent = '4.8 ';

const starElements = [];
for (let i = 0; i < 5; i++) {
  const starElement = document.createElement('span');
  starElement.className = 'fa fa-star checked';
  starElements.push(starElement);
}

divElement.appendChild(spanElement);
starElements.forEach((starElement) => divElement.appendChild(starElement));

ratingContainer.appendChild(divElement);