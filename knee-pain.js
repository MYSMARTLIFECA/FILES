const reviews = [
    {
      rating: 5,
      purchaseInfo: "Infrared Heating Therapy Kneepad, Relieve Arthritis Knee Pain",
      reviewContent: "Put this on my knee as soon as it arrived. The massage setting is great, yet to try the heat setting. Overall, it looks really well made! And fits around my swollen knee. I'd recommend",
      customerInfo: "Vilon T. - Reviewed on Oct 3, 2023",
      image: "https://i.postimg.cc/gjJ94WNW/1385fcae-857a-4fb3-b691-e18adb268c8a.webp"
    },
    {
      rating: 5,
      purchaseInfo: "Infrared Heating Therapy Kneepad, Relieve Arthritis Knee Pain",
      reviewContent: "looks good you have to try it to see that it works correctly.",
      customerInfo: "Moni H. - Reviewed on Sep 10, 2023",
      image: "https://i.postimg.cc/W35Cdyjf/6dafe8f0-d14e-4bd2-97f3-7dd27d2e27f4.webp"
    },
    {
      rating: 5,
      purchaseInfo: "Infrared Heating Therapy Kneepad, Relieve Arthritis Knee Pain",
      reviewContent: "Bought for my father, he loves it. He says it definitely makes his knee feel better. thanks MSL for another great item",
      customerInfo: "Sarah T. - Reviewed on Sep 12, 2023",
      image: "https://i.postimg.cc/HsqK8XDH/c1a3c541-c3bb-4d75-8167-8afeaefb677d.webp"
    },
    {
      rating: 5,
      purchaseInfo: "Infrared Heating Therapy Kneepad, Relieve Arthritis Knee Pain",
      reviewContent: "I thought I had ordered 2 but no way to use it for knee dolotes and put it on my shoulder that I have hurt but it was excellent purchase",
      customerInfo: "Gabri F. - Reviewed on Oct 5, 2023",
      image: "https://i.postimg.cc/L5qCn6xn/a321f2c8-bd59-45d7-81b4-94c538b6706b.webp"
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