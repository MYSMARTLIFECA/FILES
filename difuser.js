const reviews = [
  {
    rating: 5,
    purchaseInfo: "Simulation Flame Ultrasonic Humidifier, Aromatherapy Diffuser, 9 Colors Lighting Diffuser",
    reviewContent: "This diffuser is a game-changer! The flames and lighting create a cozy atmosphere, and the essential oils add a lovely touch. It's easy to use and maintain. Highly recommend.",
    customerInfo: "Paca T. - Sep 3, 2023",
    image: "https://i.postimg.cc/ZKsvW5dF/bfb390cb-20c0-4329-a7f9-6caca815082c.webp"
  },
  {
    rating: 5,
    purchaseInfo: "Simulation Flame Ultrasonic Humidifier, Aromatherapy Diffuser, 9 Colors Lighting Diffuser",
    reviewContent: "I love this diffuser! It creates a cozy ambiance with the flame effect, and the essential oils are a nice bonus. I use it daily to unwind. Great addition to my space.",
    customerInfo: "Marta H. - Sep 10, 2023",
    image: "https://i.postimg.cc/tTDC8Bdt/ecf15e2d-04e4-4ebf-a180-dc8fc7f71ff9.webp"
  },
  {
    rating: 5,
    purchaseInfo: "Simulation Flame Ultrasonic Humidifier, Aromatherapy Diffuser, 9 Colors Lighting Diffuser",
    reviewContent: "This diffuser is a calming addition to my home. The realistic flames and soothing essential oils make it worthwhile. I use it regularly for relaxation.",
    customerInfo: "Joe T. - Sep 25, 2023",
    image: "https://i.postimg.cc/3NsMqGqF/bf361a90-dd4b-4ec3-a4bd-df8482a25b04.webp"
  },
  {
    rating: 5,
    purchaseInfo: "Simulation Flame Ultrasonic Humidifier, Aromatherapy Diffuser, 9 Colors Lighting Diffuser",
    reviewContent: "I was hesitant at first, but this diffuser surprised me. Realistic flames and pleasant aromas make it a part of my daily relaxation. I can't imagine my evenings without it.",
    customerInfo: "Sara F. - Oct 2, 2023",
    image: "https://i.postimg.cc/ZRn1KjtL/b6833264-465a-4f7e-bfe5-6342d0abfe3d.webp"
  },
  {
    rating: 4,
    purchaseInfo: "Simulation Flame Ultrasonic Humidifier, Aromatherapy Diffuser, 9 Colors Lighting Diffuser",
    reviewContent: "Great ambiance! The flame effect is cozy, and the lighting options are a nice touch. It's perfect for my bedroom, but I wish it had a larger water capacity.",
    customerInfo: "Sarah - Oct 9, 2023",
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