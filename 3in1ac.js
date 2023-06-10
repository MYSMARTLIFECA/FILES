const reviews = [
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "This is a very useful little air conditioner. I have an office in the basement. The room is not big, so I can use it to keep it cool and cool. There are four ice cubes for you to change to keep the cold air constant. It is not like other air conditioners that have to pass the pipe to the outside. And the sound is small and the space used by the station is not large. Really easy to use. You don't have to worry about it in summer!",
customerInfo: "yongshanwu35 - Reviewed on May 11, 2023",
    image: "https://i.postimg.cc/02Vsf9s2/61-EBHR3-J07-L.jpg"
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "I purchased this for use in my bedroom and absolutely LOVE the fact that I can use the included remote control to change the device settings without getting up out of bed in the middle of the night when it gets cooler, as well as waking up too warm when the sun comes up. I sleep better, and knowing that I'm not going to get injured in the dark fumbling with controls is a relief to my family. Thank you for including this feature with your GREAT WORKING product!",
customerInfo: "mohammed m - Reviewed on May 9, 2023",
    image: "https://i.postimg.cc/BnRRY6ws/61g-LBs5-IFo-L.jpg"
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "When I bought this cooler, San Diego is still a little cold, but I want to prepare for the summer. I placed the order in advance and as soon as I get the cooler, it went to almost 80 degrees! I was hesitated on whether to get an air conditioner or a cooler, this cooler is cheaper, not as expensive as an air conditioner in regards to electricity, and it helps me quietly humidity my room. Works great for me using at night.",
customerInfo: "Jade M - Reviewed on May 7, 2023",
    image: "https://i.postimg.cc/KjY9vSsJ/81u3w6-EN5y-L.jpg"
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "This portable Air conditioner is best for my bedroom as we know that summer is here. The product is great and quality is also good. We can use it as a cooler, fan, humidifier and air purifier. It has 3 fan speed and 3 wind modes also 90’ and 120’ rotation. Working Nice.",
customerInfo: "Mr.SheikhTalha - Reviewed on May 18, 2023",
    image: "https://i.postimg.cc/SN3ZqPLf/81x-Pw9-ENy-LL.jpg"
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "This portable air conditioner is absolutely amazing! Its sleek and modern design fits perfectly in my room and its cooling power is truly impressive. Setup was a breeze and the instructions were very clear. I love that it's energy efficient and the remote control makes it easy to adjust the settings from anywhere in the room. Overall, this is a great product that I would highly recommend to anyone looking for a reliable and affordable air conditioner. Five stars for sure!",
customerInfo: "scoopz - Reviewed on April 23, 2023",
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "This 3-speed air conditioner works very well not only to cool the air (and it is quick!), but also to purify, humidify, and circulate the air, all functions in a very convenient size & lightweight unit! It also comes with a remote and has a timer! It's got a big water tank capacity & 4 ice boxes to do the trick and keep you cool all night!",
customerInfo: "Elena - Reviewed on May 2, 2023",
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "It's easy to install and use, half smaller than the one I bought last year. I put it in my living room, and every time my son eats, he's afraid of the heat and always opens it to use! Not bad, worth recommending to everyone.",
customerInfo: "Tina - Reviewed on April 29, 2023",
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "This serves as both an AC and a humidifier. Fits nicely in my room!",
customerInfo: "Ayzaan - Reviewed on April 3, 2023 ",
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "Very cold and quiet",
customerInfo: "Michael - Reviewed on April 23, 2023",
},
{
rating: 5,
purchaseInfo: "Portable Air Conditioner",
reviewContent: "Cool",
customerInfo: "Reviewed in the United States on April 27, 2023",
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