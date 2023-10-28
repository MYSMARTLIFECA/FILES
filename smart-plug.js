const reviews = [
    {
      rating: 5,
      purchaseInfo: "Smart Wi-Fi Socket: Simplify Your Life With Smart Control",
      reviewContent: "The Smart Wi-Fi Socket has truly simplified my life. I can control my devices remotely, and the scheduling feature is a game-changer. Setup was a breeze, and it's been a valuable addition to my home automation setup.",
      customerInfo: "Sarah R. - Reviewed on Oct 20, 2023",
    },
    {
      rating: 4,
      purchaseInfo: "Smart Wi-Fi Socket: Simplify Your Life With Smart Control",
      reviewContent: "I'm impressed with the Smart Wi-Fi Socket. It works well, and the remote control feature is handy. The only reason I'm not giving it 5 stars is the initial setup, which could be a bit smoother.",
      customerInfo: "David M. - Reviewed on Oct 18, 2023",
    },
    {
      rating: 5,
      purchaseInfo: "Smart Wi-Fi Socket: Simplify Your Life With Smart Control",
      reviewContent: "This Wi-Fi Socket is a must-have for anyone looking to add smart control to their home. It's been a game-changer in terms of convenience. The app is user-friendly, and it's made my life so much easier.",
      customerInfo: "Emma L. - Reviewed on Oct 15, 2023",
    },
    {
      rating: 5,
      purchaseInfo: "Smart Wi-Fi Socket: Simplify Your Life With Smart Control",
      reviewContent: "The Smart Wi-Fi Socket is fantastic. I can control my devices with ease, and the scheduling feature allows me to automate tasks. It's a valuable addition to my smart home setup.",
      customerInfo: "Michael J. - Reviewed on Oct 10, 2023",
    },
    {
      rating: 5,
      purchaseInfo: "Smart Wi-Fi Socket: Simplify Your Life With Smart Control",
      reviewContent: "I'm loving the convenience the Smart Wi-Fi Socket brings to my life. It's responsive, and I can control my devices with ease. No complaints here!",
      customerInfo: "James S. - Reviewed on Oct 5, 2023",
    },
    {
      rating: 5,
      purchaseInfo: "Smart Wi-Fi Socket: Simplify Your Life With Smart Control",
      reviewContent: "This Wi-Fi Socket is a game-changer for me. It's made my home smarter and more efficient. Setting up schedules for my devices has never been easier. I highly recommend it.",
      customerInfo: "Olivia W. - Reviewed on Oct 2, 2023",

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