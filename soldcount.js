document.addEventListener("DOMContentLoaded", function() {
  // Function to generate a random number between 98 and 673
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to set a single cookie for all elements
  function setElementCookies(elements) {
    const elementData = {};
    elements.forEach(element => {
      const randomValue = getRandomNumber(98, 673);
      elementData[element.id] = randomValue;
      element.textContent = `(${randomValue}+ sold)`;
    });

    const cookieValue = JSON.stringify(elementData);
    const expires = new Date();
    expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000); // Store for 30 days
    document.cookie = `elementData=${cookieValue};expires=${expires.toUTCString()}`;
  }

  // Function to get the single cookie containing element information
  function getElementCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim().split('=');
      if (cookie[0] === 'elementData') {
        return JSON.parse(cookie[1]);
      }
    }
    return {};
  }

  // Select all elements with the class "sold-count"
  const soldElements = document.querySelectorAll('.sold-count');

  soldElements.forEach(function(element) {
    // Generate a unique ID for the element
    element.id = 'element_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  });

  // Get element data from the cookie or generate new data
  const elementData = getElementCookies();

  soldElements.forEach(function(element) {
    const existingValue = elementData[element.id];
    const randomValue = existingValue || getRandomNumber(98, 673);
    element.textContent = `(${randomValue}+ sold)`;
    elementData[element.id] = randomValue;
  });

  // Update the cookie with the latest data
  setElementCookies(soldElements);
});
