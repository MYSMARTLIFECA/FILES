const reviews = [
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "These earphones are amazing! They are very easy to connect and have good sound quality.",
    customerInfo: "Klemens T. - Reviewed on Feb 3, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "Very good earphones. Sound is clear, nice bass. Highly recommended.",
    customerInfo: "Gage E. - Reviewed on Mar 10, 2023",
    image: "https://i.postimg.cc/qvnxn3bV/snapedit-1686337693707.jpg"
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "So good, tested well so far, I find the volume to be a bit loud, but that could be my ears. Will leave additional feedback.",
    customerInfo: "Gayla T. - Reviewed on Apr 25, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "Thank you so much!!!",
    customerInfo: "Aliya F. - Reviewed on Jun 2, 2023",
    image: "https://i.postimg.cc/qv8v2J2Z/51m-FQo0q-T-L-SL1600.jpg"
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "Delivery was very fast. It was packed well and came without any damage.",
    customerInfo: "Nour H. - Reviewed on Jul 15, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "For this price, I really think it's cheap haha. I like them.",
    customerInfo: "Moriya M. - Reviewed on Aug 29, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "Good stuff, I got them when they were $70 but it's okay. I will repurchase for my wife soon for sure.",
    customerInfo: "Windy M. - Reviewed on Oct 8, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "Great earphones! Fully match the photos. Everything is working.",
    customerInfo: "Germain B. - Reviewed on Nov 17, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "I didn't believe it's actually same-day delivery, but it's true. I never received any order the same day until I ordered here. 👍👍👍👍👍👍",
    customerInfo: "Vladimiro D. - Reviewed on Dec 23, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "EARPODS PRO",
    reviewContent: "La livraison c'est vraiment rapiddd, merci beaucoup!!!",
    customerInfo: "Alfonso V. - Reviewed on Jan 5, 2024",
  },
];


// Number of reviews to show per page
const reviewsPerPage = 6;

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