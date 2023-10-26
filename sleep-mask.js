const reviews = [
    {
      rating: 5,
      purchaseInfo: "Wireless Sleep Mask, Sleep Headphones, Adjustable & Washable",
      reviewContent: "I'm in love with this sleep mask! The headphones are so comfortable, and I can adjust the fit to my liking. Being washable is a bonus. I've been having the best nights of sleep with this.",
      customerInfo: "Ella K. - Reviewed on Oct 5, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Wireless Sleep Mask, Sleep Headphones, Adjustable & Washable",
      reviewContent: "I've tried various sleep masks, but this one is by far the best. The wireless headphones are a game-changer for my sleep routine. They are adjustable and incredibly comfortable. I can't sleep without it now.",
      customerInfo: "Mason R. - Reviewed on Oct 10, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Wireless Sleep Mask, Sleep Headphones, Adjustable & Washable",
      reviewContent: "This sleep mask is a lifesaver. It's adjustable and fits perfectly. The wireless headphones are crystal clear, and it's so convenient that I can wash it. My nights are much more restful.",
      customerInfo: "Sophie L. - Reviewed on Oct 15, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Wireless Sleep Mask, Sleep Headphones, Adjustable & Washable",
      reviewContent: "I've struggled with sleep for a while, but this sleep mask has made a world of difference. The headphones are top-notch, and the mask is so easy to clean. I'm finally getting the sleep I need.",
      customerInfo: "Nathan C. - Reviewed on Oct 20, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Wireless Sleep Mask, Sleep Headphones, Adjustable & Washable",
      reviewContent: "The comfort of this sleep mask is unparalleled. The wireless headphones are clear and have excellent battery life. Being washable is a huge advantage. I can't recommend it enough.",
      customerInfo: "Olivia M. - Reviewed on Oct 25, 2023"
    },
    {
      rating: 5,
      purchaseInfo: "Wireless Sleep Mask, Sleep Headphones, Adjustable & Washable",
      reviewContent: "This sleep mask is a dream come true. The headphones are fantastic, and the washable feature is a game-changer. I've never slept better. If you're looking for a sleep solution, this is it.",
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