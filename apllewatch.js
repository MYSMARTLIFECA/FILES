const reviews = [
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "This smartwatch is fantastic! It looks and feels just like the Apple version, and the features are impressive.",
    customerInfo: "John D. - Reviewed on Mar 14, 2023",
        image: "https://i.postimg.cc/jSR4z9yt/71yl8k-Utiz-L-SL1600.jpg"
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "I'm very satisfied with this smartwatch. The display is sharp, the battery life is excellent, and it's easy to use. Highly recommended.",
    customerInfo: "Emily S. - Reviewed on Apr 27, 2023",
        image: "https://i.postimg.cc/50DmL2SR/71-Bx1s-F4r-OL-SY256.jpg"
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "I've been using this watch for a while now, and it's been performing exceptionally well. It's comfortable to wear and has a user-friendly interface.",
    customerInfo: "Daniel R. - Reviewed on May 9, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "Thank you so much for this amazing smartwatch!",
    customerInfo: "Olivia M. - Reviewed on Jun 21, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "The delivery was incredibly fast, and the watch arrived in perfect condition. I'm very impressed with the packaging and the overall service.",
    customerInfo: "Michael L. - Reviewed on Jul 3, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "Considering its price, this smartwatch is a great value for money. It looks premium and functions flawlessly.",
    customerInfo: "Sophia C. - Reviewed on Aug 15, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "I'm really impressed with this smartwatch! The discount I got was a pleasant surprise. I'm planning to buy another one for my spouse soon.",
    customerInfo: "Benjamin H. - Reviewed on Sep 27, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "This smartwatch is outstanding! It looks and functions just like the Apple version. I couldn't be happier with my purchase.",
    customerInfo: "Ava G. - Reviewed on Nov 8, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "I didn't believe it would be possible, but the same-day delivery surprised me. It's the first time I've received an order on the same day. Thumbs up!",
    customerInfo: "Liam K. - Reviewed on Dec 20, 2023",
  },
  {
    rating: 5,
    purchaseInfo: "iWatch Series 8 45mm",
    reviewContent: "The delivery was really fast, thank you very much!",
    customerInfo: "Emma J. - Reviewed on Jan 1, 2024",
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