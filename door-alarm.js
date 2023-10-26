const reviews = [
    {
      rating: 5,
      purchaseInfo: "Portable Door Stop Alarm - Secure Your Home or Apartment Anywhere",
      reviewContent: "This portable door stop alarm is a game-changer. It's easy to use and provides an extra layer of security to my home. The alarm is loud, and the device is compact. I feel much safer with this.",
      customerInfo: "Ella K. - Reviewed on Oct 5, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Portable Door Stop Alarm - Secure Your Home or Apartment Anywhere",
      reviewContent: "I love this door stop alarm! It's a simple yet effective way to enhance home security. The alarm is quite loud, and it's portable, making it perfect for travel. I highly recommend it.",
      customerInfo: "Mason R. - Reviewed on Oct 10, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Portable Door Stop Alarm - Secure Your Home or Apartment Anywhere",
      reviewContent: "I feel more secure with this door stop alarm. It's easy to install and use. The alarm is quite loud, and I love the portability. Whether at home or on the go, it's a must-have for safety.",
      customerInfo: "Sophie L. - Reviewed on Oct 15, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Portable Door Stop Alarm - Secure Your Home or Apartment Anywhere",
      reviewContent: "This door stop alarm is fantastic. It adds an extra layer of protection to my home. The alarm is loud enough to alert anyone nearby, and it's compact for travel. I recommend it to everyone.",
      customerInfo: "Nathan C. - Reviewed on Oct 20, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Portable Door Stop Alarm - Secure Your Home or Apartment Anywhere",
      reviewContent: "I'm impressed with this door stop alarm. It's a simple yet effective security solution. The loud alarm and portability are great features. I feel safer at home and during my travels.",
      customerInfo: "Olivia M. - Reviewed on Oct 25, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Portable Door Stop Alarm - Secure Your Home or Apartment Anywhere",
      reviewContent: "This door stop alarm is a must-have for home security. The alarm is loud, and the device is easy to use. I take it with me when traveling for added peace of mind. Highly recommended!",
      customerInfo: "Daniel W. - Reviewed on Oct 30, 2023"
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
