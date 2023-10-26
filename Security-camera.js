const reviews = [
  {
    rating: 5,
    purchaseInfo: 'Wireless Outdoor Security Camera, AI Human Detection',
    reviewContent: "The picture quality is good, and it's been working well so far. 👌",
    customerInfo: "Saylan T. - Reviewed on Sep 29, 2023",
    image: "https://i.postimg.cc/HsT4Bq7D/4ddf0e2c-198c-45ff-9f28-27a0a2f4f578-1276x1702.webp"
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Outdoor Security Camera, AI Human Detection",
    reviewContent: "The product arrived in a timely manner with no damage. It was easy to set up and share. The picture quality is very good, and the motion detection works well. I would definitely recommend this product, and the price was just right. Thank you.",
    customerInfo: "Hana H. - Reviewed on Sep 18, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Outdoor Security Camera, AI Human Detection",
    reviewContent: "This camera captures nice images and sends alerts to my phone whenever someone is around. The inclusion of the solar panel is a great idea. I absolutely love this camera and highly recommend it.",
    customerInfo: "Numar F. - Reviewed on Oct 12, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Outdoor Security Camera, AI Human Detection",
    reviewContent: "I am extremely satisfied with this camera. The picture quality is impressive, and it provides peace of mind knowing it's watching over my property. Installation was a breeze, and the app is user-friendly.",
    customerInfo: "David S. - Reviewed on Nov 5, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Outdoor Security Camera, AI Human Detection",
    reviewContent: "This camera exceeded my expectations. It's not only a reliable security solution but also a convenient way to keep an eye on my surroundings. The AI human detection feature works like a charm.",
    customerInfo: "Emily L. - Reviewed on Nov 12, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "Wireless Outdoor Security Camera, AI Human Detection",
    reviewContent: "I can't express how pleased I am with this camera. It's been a game-changer for my home security. The image quality is crystal clear, and the motion detection is accurate. It's a must-have for anyone looking to upgrade their security system.",
    customerInfo: "Tom R. - Reviewed on Nov 20, 2023",
  }
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