const reviews = [
    {
      rating: 5,
      purchaseInfo: "EARPODS PRO",
      reviewContent: "Wow, these earphones are amazing! Super easy to connect, and the sound is pretty darn good. I'm impressed. 🎵",
      customerInfo: "Klemens T. - Reviewed on Feb 3, 2023"
      image: "https://i.postimg.cc/8cCFTbZm/Webppro-out-136abc0b8ce635835e5743689fa4aaa0.webp" 
    },
    {
      rating: 5,
      purchaseInfo: "EARPODS PRO",
      reviewContent: "These earphones are the bomb! Sound is crystal clear, and the bass? It's like a party in my ears. Highly recommend! 🎧",
      customerInfo: "Gage E. - Reviewed on Mar 10, 2023"
      image: "https://i.postimg.cc/vBYTvzww/51m-FQo0q-T-L-SL1600.webp"  
    },
    {
      rating: 4,
      purchaseInfo: "EARPODS PRO",
      reviewContent: "So far, so good with these earphones. The volume is kinda loud, but hey, it could be my ears. I'll keep using them and maybe leave more feedback later. 🎶",
      customerInfo: "Gayla T. - Reviewed on Apr 25, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "EARPODS PRO",
      reviewContent: "Just wanna say, thank you so much! These earphones rock! 🤘",
      customerInfo: "Aliya F. - Reviewed on Jun 2, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "EARPODS PRO",
      reviewContent: "Man, the delivery was crazy fast. They packed it well, and it arrived without a scratch. These are like a steal for the price. Cheap and awesome! 📦💨",
      customerInfo: "Nour H. - Reviewed on Jul 15, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "EARPODS PRO",
      reviewContent: "I mean, for this price, they're practically a steal! I'm diggin' these earphones. 🤑",
      customerInfo: "Moriya M. - Reviewed on Aug 29, 2023"
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
