const reviews = [
  {
      rating: 5,
      productName: "Seemagic Nail Trimmer: Professional Nail Care Made Easy",
      reviewContent: "I can't express how impressed I am with the Seemagic Nail Trimmer. It's incredibly easy to use and delivers salon-quality results at home. I've saved so much money and time since I started using it. Highly recommended!",
      customerInfo: "Emily - Reviewed on Oct 25, 2023",
  },
  {
      rating: 5,
      productName: "Seemagic Nail Trimmer: Professional Nail Care Made Easy",
      reviewContent: "This nail trimmer is a game-changer. It's safe, precise, and makes nail care a breeze. The ergonomic design is comfortable to hold, and the results speak for themselves. I love it!",
      customerInfo: "Michael - Reviewed on Oct 22, 2023",
  },
  {
      rating: 5,
      productName: "Seemagic Nail Trimmer: Professional Nail Care Made Easy",
      reviewContent: "I was skeptical at first, but this trimmer exceeded my expectations. It's quick, efficient, and the noise level is not bothersome at all. I've ditched my old clippers for good. Thank you, Seemagic!",
      customerInfo: "Sophia - Reviewed on Oct 20, 2023",
  },
  {
      rating: 5,
      productName: "Seemagic Nail Trimmer: Professional Nail Care Made Easy",
      reviewContent: "I can't believe how easy nail care has become with this trimmer. It's like having a professional manicure at home. The battery life is decent, and I appreciate the convenience it offers. Worth every penny!",
      customerInfo: "David - Reviewed on Oct 18, 2023",
  },
  {
      rating: 5,
      productName: "Seemagic Nail Trimmer: Professional Nail Care Made Easy",
      reviewContent: "The Seemagic Nail Trimmer has made my life so much easier. It's simple to use, and I no longer struggle with traditional clippers. It's a 5-star product that I recommend to everyone!",
      customerInfo: "Olivia - Reviewed on Oct 15, 2023",
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