const applewatch = document.getElementById('applewatch');

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

applewatch.appendChild(divElement);







const EarPods = document.getElementById('EarPods');

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

EarPods.appendChild(divElement);





const EyeMassager = document.getElementById('EyeMassager');

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

EyeMassager.appendChild(divElement);