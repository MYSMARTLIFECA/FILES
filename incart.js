// Create a function to generate a random number between 10 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  }
  
  // Function to set a cookie with the random number
  function setRandomNumberCookie() {
    var randomNumber = getRandomNumber();
    document.cookie = `randomNumber=${randomNumber}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    return randomNumber;
  }
  
  // Function to get the random number from the cookie
  function getRandomNumberFromCookie() {
    var name = "randomNumber=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return parseInt(cookie.substring(name.length, cookie.length));
      }
    }
    return null;
  }
  
  // Find the element containing the number
  var element = document.querySelector('div');
  
  if (element) {
    var randomNumber;
    var queryParamNumber = parseInt(new URLSearchParams(window.location.search).get('number'));
  
    if (queryParamNumber) {
      // If the page URL has a 'number' parameter, use that value
      randomNumber = queryParamNumber;
    } else {
      // If not, check if the number is stored in the cookie
      randomNumber = getRandomNumberFromCookie();
  
      if (!randomNumber) {
        // If not in the cookie, generate a new random number and store it in the cookie
        randomNumber = setRandomNumberCookie();
      }
    }
  
    // Extract the number from the element's text
    var text = element.textContent;
    var number = parseInt(text.match(/\d+/)[0]);
  
    // Replace the number with the stored random number
    var updatedText = text.replace(number, randomNumber);
  
    // Update the element with the new text
    element.textContent = updatedText;
  } else {
    console.log("Element not found");
  }
  