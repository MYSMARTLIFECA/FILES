document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a random number between 98 and 673
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Function to set a unique cookie for an element
    function setElementCookie(element, value, days) {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${element.id}=${value};expires=${expires.toUTCString()}`;
    }
  
    // Function to get a unique cookie for an element
    function getElementCookie(element) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim().split('=');
        if (cookie[0] === element.id) {
          return cookie[1];
        }
      }
      return null;
    }
  
    // Select all elements with the class "sold-count"
    const soldElements = document.querySelectorAll('.sold-count');
  
    soldElements.forEach(function(element) {
      // Generate a unique ID for the element
      element.id = 'element_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  
      // Get the existing value from the unique cookie, or generate a new one
      const existingValue = getElementCookie(element);
      const randomValue = existingValue || getRandomNumber(98, 673);
  
      // Set the content and store it in a unique cookie
      element.textContent = `(${randomValue}+ sold)`;
      setElementCookie(element, randomValue, 30); // Store for 30 days
    });
  });