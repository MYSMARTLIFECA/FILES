const reviews = [
    {
      rating: 5,
      purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
      reviewContent: "White colour complements my devices. Great design that holds the watch face towards the user. Non-slip pad keeps the phone upright while charging, even with no case. Great product.", 
      customerInfo: "Victor T. - Reviewed on Oct 17, 2023",
      image: "https://i.postimg.cc/sXSjc154/61-Gt2wva-UHL.jpg"
    },
    {
      rating: 5,
      purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
      reviewContent: "Great texture, functions well so far.",
      customerInfo: "Monia H. - Reviewed on Sep 20, 2023",
    },
    {
      rating: 5,
      purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
      reviewContent: "This folds down to take up little space. Nice to be able to have a place for the watch to charge. Not as fast charging phone directly attached to cable, but it works well even through my case.      ",
      customerInfo: "Mani T. - Reviewed on Sep 22, 2023",
  
    },
    
  ];
    
  
  
  
  // Number of reviews to show per page
  const reviewsPerPage = 3;
  
  // Calculate the total number of pages based on reviews count
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  // Define an array of colors
  const logoColors = ["#3d0088", "#880086","#880010","#885900"];
  
  // Function to get a random color from the array
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * logoColors.length);
    return logoColors[randomIndex];
  }
  
  // Function to render reviews for a given page
  function renderReviews(pageNumber) {
    const startIndex = (pageNumber - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const reviewsSlice = reviews.slice(startIndex, endIndex);
  
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = "";
  
    for (const review of reviewsSlice) {
      const reviewElement = document.createElement("li");
      reviewElement.classList.add("review");
  
      // Rating stars
      const ratingElement = document.createElement("div");
      ratingElement.classList.add("rating");
      for (let i = 1; i <= 5; i++) {
        const starElement = document.createElement("span");
        starElement.classList.add("fa", "fa-star");
        if (i <= review.rating) {
          starElement.classList.add("checked");
        }
        ratingElement.appendChild(starElement);
      }
  
      // Get the first letter of the customer's first name
      const firstLetter = review.customerInfo.charAt(0);
  
      // Purchase info
      const purchaseInfoElement = document.createElement("div");
      purchaseInfoElement.classList.add("purchase-info");
      purchaseInfoElement.textContent = review.purchaseInfo;
  
      // Create the user logo element with verification feature
      const userLogoElement = document.createElement("div");
      userLogoElement.classList.add("user-logo");
      userLogoElement.textContent = firstLetter; // Set the logo content to the first letter
  
      // Set a random color to the logo
      const randomColor = getRandomColor();
      userLogoElement.style.backgroundColor = randomColor;
  
      // Add event listener for hover
      userLogoElement.addEventListener("mouseover", () => {
        userLogoElement.innerHTML = `<span class="fa fa-check"></span>${firstLetter}`;
      });
  
      userLogoElement.addEventListener("mouseout", () => {
        userLogoElement.textContent = firstLetter;
      });
  
      // Customer info
      const customerInfoElement = document.createElement("div");
      customerInfoElement.classList.add("customer-info");
      customerInfoElement.textContent = review.customerInfo;
  
      // Review content
      const reviewContentElement = document.createElement("div");
      reviewContentElement.classList.add("review-content");
      reviewContentElement.textContent = review.reviewContent;
  
      // Create a container element to hold the user logo and customer info
      const customerContainer = document.createElement("div");
      customerContainer.classList.add("customer-container");
      customerContainer.appendChild(userLogoElement);
      customerContainer.appendChild(customerInfoElement);
  
      reviewElement.appendChild(ratingElement);
      reviewElement.appendChild(purchaseInfoElement);
      reviewElement.appendChild(reviewContentElement);
      reviewElement.appendChild(customerContainer);
    // Check if the review has an image
    if (review.image) {
      const imageElement = document.createElement("img");
      imageElement.src = review.image;
      imageElement.classList.add("review-image");
      reviewElement.appendChild(imageElement);
    }
      reviewsList.appendChild(reviewElement);
  
    }
  }
  
// Function to render pagination buttons
function renderPagination(pageNumber) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const div = document.createElement("div");
    div.textContent = "" + i; // Update the button name here
    div.addEventListener("click", () => {
      renderReviews(i);
      renderPagination(i);
    });

    if (i === pageNumber) {
      div.classList.add("active");
    }

    div.classList.add("div-reviews"); // Add the class "div-reviews"
    pagination.appendChild(div);
  }
}

  
  // Initial rendering of reviews (page 1)
  renderReviews(1);
  
  // Initial rendering of pagination buttons
  renderPagination(1);