const reviews = [
  {
    rating: 5,
    purchaseInfo: "Relieve Eye Strain: Eye Massager With Built-In Speaker",
    reviewContent: "This eye massager is a game-changer! It feels like a soothing oasis for my tired eyes. The built-in speaker adds a relaxing touch. I can't believe I didn't get this sooner!",
    customerInfo: "Lena B. - Reviewed on Sep 5, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Relieve Eye Strain: Eye Massager With Built-In Speaker",
    reviewContent: "I'm pleasantly surprised by this eye massager. It's like a mini-vacation for my eyes after a long day. The built-in speaker is a nice addition for some calming tunes. It's a must-try!",
    customerInfo: "Sam R. - Reviewed on Sep 15, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Relieve Eye Strain: Eye Massager With Built-In Speaker",
    reviewContent: "So good! I've been using this eye massager, and it really helps with my eye strain. The built-in speaker is a bonus for my relaxation sessions. Definitely worth it!",
    customerInfo: "Lisa H. - Reviewed on Sep 30, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Relieve Eye Strain: Eye Massager With Built-In Speaker",
    reviewContent: "I can't express how much I love this eye massager. It's pure bliss for my eyes, and the built-in speaker takes it to the next level. It's become my daily ritual. Treat yourself!",
    customerInfo: "Amy G. - Reviewed on Oct 16, 2023"
  },
  {
    rating: 4,
    purchaseInfo: "Relieve Eye Strain: Eye Massager With Built-In Speaker",
    reviewContent: "This eye massager is great, but the price is a bit steep for me. The relief it brings is worth it, but I wish it were more affordable. Still, it's a solid product.",
    customerInfo: "Jason L. - Reviewed on Oct 5, 2023"
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
