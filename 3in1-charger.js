const reviews = [
  {
    rating: 5,
    purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
    reviewContent: "I love the white color that perfectly complements my devices. The design is great as it holds the watch face towards the user. The non-slip pad keeps my phone upright while charging, even without a case. This is a great product that I highly recommend.",
    customerInfo: "Victor T. - Reviewed on Oct 17, 2023",
    image: "https://i.postimg.cc/J0RgTp1m/61-Gt2wva-UHL.webp" 
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
    reviewContent: "I'm really impressed with the great texture of this charger stand. It functions well and has been reliable so far.",
    customerInfo: "Monia H. - Reviewed on Sep 20, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
    reviewContent: "I appreciate that this charger stand folds down to take up very little space. It's convenient to have a dedicated spot for my watch to charge. While it may not be as fast as charging the phone directly attached to a cable, it works well, even through my phone case.",
    customerInfo: "Mani T. - Reviewed on Sep 22, 2023",
  },
  {
    rating: 4,
    purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
    reviewContent: "The charger stand is good, but it could be a bit faster when charging the phone directly. It's convenient for my watch, and the design is nice.",
    customerInfo: "Lisa K. - Reviewed on Oct 10, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
    reviewContent: "This charger stand is a must-have! It makes charging my devices so much more convenient. The design is sleek, and it fits well with my home setup.",
    customerInfo: "Daniel R. - Reviewed on Oct 5, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Charger Stand: Fast Qi Charging, 3 in 1",
    reviewContent: "I couldn't be happier with this charger stand. It's compact and functional. The non-slip pad keeps my phone steady while charging. I use it every day without any issues.",
    customerInfo: "Emily L. - Reviewed on Sep 15, 2023",
  }
]; 
    
  
  
  
  // Number of reviews to show per page
  const reviewsPerPage = 4;
  
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