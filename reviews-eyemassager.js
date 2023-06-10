// Reviews data
const reviews = [
      {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I'm so glad I purchased this, i highly recommend it!",
    customerInfo: "James R. - Mar 28, 2024",
    image: "https://i.ibb.co/4VtbL77/4.jpg"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I am amazed by the effectiveness of this eye massager! The combination of soothing eye massage and the built-in speaker makes it a perfect companion for unwinding after a tiring day. Highly recommended!",
    customerInfo: "Sarah M. - Feb 3, 2023"
  },
    {
    rating: 4,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "Quality product that provides relaxation and relief, it was just a bit expensive i see that they dropped the price when i came to review :/ ",
    customerInfo: "Liam P. - Nov 14, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "fantastic! I love how it comes with a built-in speaker, adding an extra element of relaxation to my eye massage sessions. The design is sleek and the massage function is truly refreshing. Great product!",
    customerInfo: "John D. - Mar 12, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "What a game-changer! with a speaker not only alleviates eye strain but also delivers high-quality sound for an immersive experience. I feel rejuvenated every time I use it.",
    customerInfo: "Emily S. - Apr 5, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I can't recommend this litle dude enough! The integration of a speaker takes the relaxation to another level. The sleek design and refreshing massage function make it a must-have for anyone who spends long hours in front of screens.",
    customerInfo: "Michael B. - May 18, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "exceeded my expectations! The soothing massage combined with the speaker's pleasant sounds creates a truly immersive experience. I've noticed a significant reduction in eye fatigue since I started using it.",
    customerInfo: "Jessica W. - Jun 2, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I'm in love with this, The addition of a speaker is genius as it enhances the overall relaxation. The compact size and portability make it convenient to use at home or during travel.",
    customerInfo: "David H. - Jul 7, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "This is a true gem! The speaker feature takes the experience to a whole new level, creating a serene environment while relieving eye strain. It's worth every penny!",
    customerInfo: "Olivia K. - Aug 19, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I'm impressed with this eye massager! The speaker adds a delightful touch, making my relaxation sessions more enjoyable. The adjustable settings allow me to customize the massage according to my preference.",
    customerInfo: "William L. - Sep 8, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I can't imagine my life without this product! It's incredibly effective in relieving tension around the eyes.",
    customerInfo: "Sophia C. - Oct 1, 2023"
  },

  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "The soothing massage and immersive sounds create a mini spa experience in the comfort of my home. It's pure bliss!",
    customerInfo: "Ava R. - Dec 5, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I'm thoroughly impressed with this eye massager! The speaker's audio quality is excellent, and the massage function is incredibly relaxing. It has become an essential part of my self-care routine.",
    customerInfo: "Ethan G. - Jan 22, 2024"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "It's worth every penny and more!",
    customerInfo: "Lily M. - Feb 9, 2024"
  },

  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "This is a must-have! a whole new level of relaxation, and the quality of the massage is exceptional. It's like a spa treatment at home!",
    customerInfo: "Grace T. - Apr 15, 2024"
  },
  {
    rating: 5,
    purchaseInfo: "SMART EYE MASSAGER WITH SPEAKER",
    reviewContent: "I can't say enough good things about this eye massager! The speaker feature enhances the entire experience, and the soothing massage melts away the stress. It's a fantastic investment!",
    customerInfo: "Benjamin S. - May 3, 2024"
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