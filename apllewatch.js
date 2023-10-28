const reviews = [
    {
      rating: 5,
      purchaseInfo: "Elevate Your Wrist: IWatch Series 8 (45mm)",
      reviewContent: "This watch is awesome! It's super sleek and stylish, and I'm absolutely loving it. It's like the coolest thing on my wrist right now. I highly recommend it!",
      customerInfo: "Jake M. - Sep 7, 2023",
      image: "https://i.postimg.cc/6qfRY3yy/71-Bx1s-F4r-OL-SY256.webp"
    },
    {
      rating: 4,
      purchaseInfo: "Elevate Your Wrist: IWatch Series 8 (45mm)",
      reviewContent: "Okay, so it's not an Apple watch, but it's still pretty cool. It gives me a fancy feeling, and I get compliments on it. I'm happy with my purchase, and you might be too!",
      customerInfo: "Samantha R. - Sep 18, 2023",
      image: "https://i.postimg.cc/HkVm1F3Z/71yl8k-Utiz-L-SL1600.webp"
    },
    {
      rating: 5,
      purchaseInfo: "Elevate Your Wrist: IWatch Series 8 (45mm)",
      reviewContent: "This watch makes me feel high-end. It's got that premium vibe, and I'm loving every moment with it. It's a total joy to wear. You should give it a try!",
      customerInfo: "Max K. - Oct 4, 2023",
    },
    {
      rating: 5,
      purchaseInfo: "Elevate Your Wrist: IWatch Series 8 (45mm)",
      reviewContent: "It's a slick choice that goes well with my iPhone. It's like my tech-savvy sidekick. If you're into style and functionality, this might just be your thing!",
      customerInfo: "Lindsay P. - Oct 8, 2023",
    },
    {
      rating: 5,
      purchaseInfo: "Elevate Your Wrist: IWatch Series 8 (45mm)",
      reviewContent: "Wearing this watch is like wearing a style statement. It gives me the trendsetter vibe, and I love that. If you want to add some swag to your daily routine, go for it!",
      customerInfo: "Chris S. - Oct 16, 2023",
    }
]; 


  // Number of reviews to show per page
  const reviewsPerPage = 4;
  
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