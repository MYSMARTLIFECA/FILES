// Reviews data
const reviews = [
  {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "Great device. I bought this massage gun to relax my muscles after exercising... It is worth the money.",
    customerInfo: "Mia - Reviewed in Canada 🇨🇦 on 13 May 2023",
    image: "https://i.ibb.co/F368SD7/71-RUsm4-Nyj-L-SL1600.jpg"
  },
    {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "INEXPENSIVE AND YET GREAT 👍. The massage gun comes in a normal box... All in all, a good and cheap device 👍👍🔝",
    customerInfo: "Jumbler - Reviewed in USA 🇺🇸 on 7 May 2023",
    image: ""
  },
    {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "Magic tension reliever. Before buying this device, I was initially skeptical about its performance. However, this skepticism disappeared very quickly with the first applications... My complaints have now already been forgotten and this device has contributed at least half of them.",
    customerInfo: "CB - Reviewed in Canada 🇨🇦 on 17 May 2023",
    image: "https://i.ibb.co/1bn1GBy/71-Ikt8kv-I-L-SL1600.jpg"
  },
  {
    rating: 4,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "Decent massage performance... It doesn't quite get close to high-priced devices, but the price/performance ratio is completely okay here. Includes a good selection of essays. Battery life could be a bit better.",
    customerInfo: "hkl BW - Reviewed in Canada 🇨🇦 on 16 April 2023",
    image: "https://i.ibb.co/xCHP8Fq/71k-DYdp-DYGL-SL1600.jpg"
  },

  {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "For rapid regeneration. I also wanted to try it out and spent quite a long time looking for a suitable device, but I didn't want to spend tons of money either... I'll say that it works.",
    customerInfo: "BG - Reviewed in Canada 🇨🇦 on 1 May 2023",
    image: "https://i.ibb.co/cK920tZ/71-Q6x11m3p-L-SL1600.jpg"
  },

  {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "My husband loves it, but I prefer a real massage. It vibrates all over the body when used and not everyone likes it, I don't like it but it seems great on the feet... according to my husband",
    customerInfo: "Tim - Reviewed in Canada 🇨🇦 on 9 May 2023",
    image: "https://i.ibb.co/gmzspLg/612-GBmqwzf-L-SL1600.jpg"
  },
  {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "Great price/quality. I'm very satisfied with the price. The gun works great and has many levels... It feels good after hard work.",
    customerInfo: "F. Atay - Reviewed in USA 🇺🇸 on 23 May 2023",
    image: ""
  },
  {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "Great, satisfied!! I use it for a few minutes every day and I'd say it was worth every penny I spent... Some quick pros and cons that come to mind after using this product.",
    customerInfo: "Buffettt - Reviewed in Canada 🇨🇦 on 2 May 2023",
    image: ""
  },
  {
    rating: 5,
    purchaseInfo: "MUSCLE MASSAGE GUN",
    reviewContent: "Clean product. Great device for the money, feels good in the hand and also has power... I like to use it after exercise.",
    customerInfo: "A. Aachen - Reviewed in Canada 🇨🇦 on 18 May 2023",
    image: ""
  }
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