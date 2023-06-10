// Reviews data
const reviews = [
    {
rating: 5,
purchaseInfo: "Canvas: Tranquil Ocean Sunset",
reviewContent: "I am in love of this canvas, The colors are so vibrant and the image is incredibly detailed. It brings a sense of calmness and serenity to my living room. Highly recommended!",
customerInfo: "Sarah M. - Feb 3, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Majestic Mountain Range",
reviewContent: "The quality of this canvas print is outstanding. The colors are true to life, and the texture adds depth to the image. It's like having a piece of nature right in my home. Love it!",
customerInfo: "David H. - Mar 10, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Enchanting Forest Path",
reviewContent: "I can't stop staring at this canvas print! It's like stepping into a magical world every time I look at it. The attention to detail is incredible, and the colors are so rich and vibrant. I'm beyond thrilled with my purchase.",
customerInfo: "Emily L. - Apr 2, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Serene Waterfall",
reviewContent: "This canvas print exceeded my expectations! The image is so crisp and clear, and the colors are breathtaking. It's the perfect focal point for my bedroom. I couldn't be happier!",
customerInfo: "Michael B. - May 5, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Vibrant Cityscape",
reviewContent: "I am absolutely in love with this canvas print! The energy and vibrancy captured in the cityscape are amazing. It adds a modern and stylish touch to my living room. Highly recommended!",
customerInfo: "Jessica T. - May 20, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Serene Beach Sunset",
reviewContent: "This canvas print transports me to a peaceful beach every time I look at it. The colors are so soothing, and the quality of the print is top-notch. It brings a sense of relaxation to my home. Love it!",
customerInfo: "Ryan K. - Jun 1, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Breathtaking Aurora Borealis",
reviewContent: "I am amazed by the beauty of this canvas print! The aurora borealis looks so vivid and mesmerizing. It adds a touch of wonder and magic to my office space. Absolutely thrilled with my purchase!",
customerInfo: "Melissa S. - Jun 10, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Stunning Desert Landscape",
reviewContent: "I can't express how much I adore this canvas print! The desert landscape looks so realistic, and the colors are absolutely stunning. It brings a sense of tranquility and warmth to my home. Highly recommend!",
customerInfo: "Robert W. - Jun 15, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Captivating Underwater World",
reviewContent: "This canvas print is a work of art! The underwater scene is so captivating, and the level of detail is incredible. It's like having a window to the ocean in my living room. I couldn't be happier with my purchase.",
customerInfo: "Sophia R. - Jun 25, 2023"
},

{
rating: 5,
purchaseInfo: "Canvas: Majestic Forest at Dawn",
reviewContent: "I am blown away by the beauty of this canvas print! The forest at dawn looks absolutely majestic. The colors and the lighting are perfect. It adds a sense of wonder and tranquility to my bedroom. Highly recommended!",
customerInfo: "Daniel G. - Jun 30, 2023"
},
  {
       rating: 5,
    purchaseInfo: "Canvas: Explosive Nebula of Fiery Energy",
    reviewContent: "I ordered a very large print, and it arrived quickly, packed nicely! When I opened it, it was absolutely gorgeous! I am extremely satisfied with this print.",
    customerInfo: "John S. - Jan 15, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Abstract Graffiti Cartoon Panda Framed Poster",
    reviewContent: "the picture is amazing , looks great in my family room ! colors look gorgeous very colorful ! this picture was a gift to my husband and he can't stop telling me how much he loves it ! thank you for a wonderful picture",
    customerInfo: "Emma J. - Feb 2, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Temporal Kaleidoscope: Boundless Rhythms [limited]",
    reviewContent: "Absolutely love it! The colors are vibrant and the print quality is excellent.",
    customerInfo: "David B. - Mar 10, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Shady Spectrum: The Vibrant Journey",
    reviewContent: "Top-notch customer service. The artwork exceeded my expectations.",
    customerInfo: "Sarah W. - Apr 5, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Art Canvas Print Modern Art Print Housewarming Gift Money Canvas Living Room Wall Art",
    reviewContent: "The print looks even better in person. It's the focal point of my living room.",
    customerInfo: "Jennifer T. - Jun 8, 2023"
  },
  {
    rating: 4,
    purchaseInfo: "Mosaic Art Decor with African American Women, Museum Quality Print, Collectable Art Piece!",
    reviewContent: "Great artwork, but the packaging could have been better to protect it during shipping.",
    customerInfo: "Michael D. - May 12, 2023"
  },
  {
    rating: 4,
    purchaseInfo: "The Gorgons - Art Print - Medusa - Witchcraft - Dark Goddess",
    reviewContent: "Nice quality, but the frame could have been sturdier.",
    customerInfo: "Robert J. - Jul 15, 2023"
  },
  {
    rating: 4,
    purchaseInfo: "Framed Kaws Canvas Wall Art",
    reviewContent: "The artwork is nice, it didn't quite meet my expectations in terms of colors.",
    customerInfo: "Daniel S. - Sep 21, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Framed Vibrant Majesty Art Wall: The Colorful Lion",
    reviewContent: "I'm impressed with the attention to detail. It's a stunning piece of art.",
    customerInfo: "Emily A. - Aug 3, 2023"
  },
  {
    rating: 4,
    purchaseInfo: "Kaws Canvas Wall Art, Kaws Graffiti Wall Art for Home Decor, Unique & Exclusive",
    reviewContent: "The print quality is good, but the size was slightly smaller than expected.",
    customerInfo: "Matthew J. - Nov 19, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Fortunate Feathers: Duck Art Wall [3 STYLES]",
    reviewContent: "Great selection of artwork. I'll definitely be a repeat customer.",
    customerInfo: "Olivia D. - Oct 7, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Peakyblinders Thomas Shelby, Pablo Escobar, Godfather [3 STYLES]",
    reviewContent: "The prints are amazing. They look even better than I imagined.",
    customerInfo: "Sophia M. - Dec 2, 2023"
  },
  {
    rating: 4,
    purchaseInfo: "Supreme Kaws Rolled Art Wall - One Size Only (24″×36″) [3 STYLES]",
    reviewContent: "Decent quality, but the price feels a bit high for what you get.",
    customerInfo: "Ethan W. - Nov 15, 2023"
  },
  {
    rating: 5,
    purchaseInfo: "Graffiti Harmony: Interlocking Hands Mural [3 STYLES]",
    reviewContent: "Absolutely stunning artwork. It's a conversation starter for sure.",
    customerInfo: "Ava T. - Jan 9, 2023"
  },
{
    rating: 5,
    purchaseInfo: "Wild Nature: Majestic Tiger Canvas Print",
    reviewContent: "I am blown away by the quality of this canvas print. The colors are vibrant and the level of detail is incredible. It looks stunning on my wall. Highly recommend!",
    customerInfo: "Jessica K. - Feb 25, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Abstract Geometric Shapes: Modern Wall Art",
    reviewContent: "I couldn't be happier with my purchase. The artwork arrived in perfect condition and the colors are even more beautiful in person. It adds a modern and stylish touch to my home. Love it!",
    customerInfo: "Ryan G. - Mar 14, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Ethereal Waters: Tranquil Ocean Sunset Canvas",
    reviewContent: "This canvas exceeded my expectations. The serene ocean sunset scene brings a sense of calmness to my living room. The quality is top-notch and the colors are breathtaking. Highly recommended!",
    customerInfo: "Sophie L. - Apr 3, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Framed Modern Abstract Art: Urban Cityscape",
    reviewContent: "I am absolutely in love with this urban cityscape artwork. The combination of colors and the unique style make it a captivating piece. The framed presentation adds a touch of elegance. Fantastic purchase!",
    customerInfo: "Benjamin M. - May 21, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Colorful Dreams: Surreal Landscape Art",
    reviewContent: "This surreal landscape art is a true masterpiece. The artist's imagination and skill are evident in every brushstroke. The colors are vibrant, and it sparks my creativity every time I look at it. Highly recommend!",
    customerInfo: "Emily R. - Jun 17, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Nature's Serenade: Beautiful Bird Art Print",
    reviewContent: "I am amazed by the level of detail in this bird art print. The colors are vibrant and the bird's plumage looks incredibly realistic. It brings a touch of nature's beauty into my home. Absolutely love it!",
    customerInfo: "Daniel H. - Jul 9, 2023"
    },
    {
    rating: 4,
    purchaseInfo: "Contemporary Sculptural Art: Abstract Human Figure",
    reviewContent: "The abstract human figure sculpture is a unique piece that adds a modern touch to my decor. The craftsmanship is impressive, but I wish the base was a bit more stable. Overall, a great addition to my collection.",
    customerInfo: "Victoria T. - Aug 4, 2023"
    },
    {
    rating: 4,
    purchaseInfo: "Vibrant Blossoms: Floral Canvas Art",
    reviewContent: "The floral canvas art is stunning and adds a burst of color to my room. The only reason I'm not giving it 5 stars is that the canvas was slightly loose on the frame. Nonetheless, it's still a beautiful piece.",
    customerInfo: "Lucas B. - Sep 12, 2023"
    },
    {
    rating: 4,
    purchaseInfo: "Abstract Metal Wall Sculpture",
    reviewContent: "The abstract metal wall sculpture has an interesting design, Some of the edges were a bit rough, and it required extra care during installation. It's a decent piece overall.",
    customerInfo: "Natalie S. - Oct 28, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Whimsical Animal Kingdom: Art Print Set",
    reviewContent: "I purchased the whimsical animal kingdom art print set, and it's absolutely delightful. The illustrations are charming, and the colors are vibrant. It brings joy and warmth to my child's bedroom. Highly recommended!",
    customerInfo: "Oliver D. - Nov 5, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Stunning Abstract Glass Sculpture",
    reviewContent: "The abstract glass sculpture is a true work of art. The combination of colors and the transparency of the glass create a mesmerizing effect. It's the centerpiece of my living room, and I receive compliments on it all the time.",
    customerInfo: "Sophia B. - Dec 19, 2023"
    },
    {
    rating: 4,
    purchaseInfo: "Vintage Movie Posters: Classic Hollywood Glamour",
    reviewContent: "I adore the vintage movie posters. They add a touch of classic Hollywood glamour to my home theater. The only reason I'm not giving it 5 stars is that the colors have slightly faded over time. Nonetheless, they still look fantastic.",
    customerInfo: "Matthew K. - Jan 27, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Minimalist Landscape: Black and White Photography",
    reviewContent: "The minimalist landscape black and white photography is stunningly beautiful. It captures the essence of tranquility and simplicity. The print quality is exceptional, and it looks incredible in my office. Highly recommend!",
    customerInfo: "Isabella L. - Feb 8, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Abstract Ceramic Sculpture: Modern Art",
    reviewContent: "This abstract ceramic sculpture is a true masterpiece. The craftsmanship and attention to detail are impeccable. It's a bold and captivating piece that adds a touch of sophistication to my decor. Love it!",
    customerInfo: "Alexander P. - Mar 23, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Elegant Botanical Prints: Set of 3",
    reviewContent: "The elegant botanical prints are absolutely beautiful. The level of detail and the quality of the paper are exceptional. They bring a touch of nature's elegance to my dining room. Highly recommended!",
    customerInfo: "Grace M. - Apr 14, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Abstract Metal Wall Art: Modern Sculpture",
    reviewContent: "I am beyond thrilled with the abstract metal wall art. The interplay of shapes and the metallic finish create a striking visual effect. It's a statement piece that adds a contemporary vibe to my space. Fantastic purchase!",
    customerInfo: "Henry G. - May 9, 2023"
    },
    {
    rating: 5,
    purchaseInfo: "Intricate Wood Carving: Handcrafted Wall Decor",
    reviewContent: "The intricate wood carving is a true work of art. The level of detail and the craftsmanship are awe-inspiring. It brings warmth and a sense of tradition to my home. Absolutely love it!",
    customerInfo: "Emma L. - Jun 28, 2023"
    },
    {
    rating: 4,
    purchaseInfo: "Abstract Metal Wall Clock: Modern Home Decor",
    reviewContent: "The abstract metal wall clock is a unique and stylish addition to my home. The design is eye-catching, but the clock mechanism is a bit loud. Other than that, it's a great piece.",
    customerInfo: "William H. - Jul 19, 2023"
    },
    {
    rating: 4,
    purchaseInfo: "Sculptural Ceramic Vase: Contemporary Art",
    reviewContent: "The sculptural ceramic vase is a striking piece that complements my modern decor. The only reason I'm not giving it 5 stars is that it's a bit smaller than I anticipated. Nonetheless, it's still a beautiful and unique vase.",
    customerInfo: "Lily C. - Aug 15, 2023"
    },
     {
    rating: 5,
    purchaseInfo: "Abstract Expressionist Painting: Vibrant Energy",
    reviewContent: "I am absolutely in awe of this abstract expressionist painting. The vibrant colors and the energy it emits create a captivating visual experience. It's a stunning addition to my art collection.",
    customerInfo: "Sophia L. - Sep 2, 2023"
    },


    {
    rating: 5,
    purchaseInfo: "Modern Sculptural Art: Dynamic Forms",
    reviewContent: "This modern sculptural art piece is simply mesmerizing. The dynamic forms and the fluidity of the sculpture evoke a sense of movement and grace. It's a true conversation starter in my living room.",
    customerInfo: "Ethan M. - Oct 10, 2023"
    },
    
    {
    rating: 5,
    purchaseInfo: "Framed Landscape Photography: Serene Waters",
    reviewContent: "The framed landscape photography captures the serenity of the waters perfectly. The composition and the clarity of the image are exceptional. It brings a sense of peace and tranquility to my bedroom.",
    customerInfo: "Olivia R. - Nov 18, 2023"
    },
    
    {
    rating: 5,
    purchaseInfo: "Contemporary Glass Art: Ethereal Beauty",
    reviewContent: "This contemporary glass art piece is an absolute gem. The ethereal beauty and the play of light on the glass create a magical ambiance. It's a focal point in my hallway and never fails to impress guests.",
    customerInfo: "Nathan C. - Dec 5, 2023"
    },
    
    {
    rating: 5,
    purchaseInfo: "Botanical Illustration Prints: Nature's Delight",
    reviewContent: "The botanical illustration prints are exquisite. The attention to detail and the accurate portrayal of the plants are commendable. They bring a touch of nature's delight to my study room.",
    customerInfo: "Sophie W. - Jan 22, 2023"
    },
    
    {
    rating: 4,
    purchaseInfo: "Abstract Metal Wall Decor: Geometric Patterns",
    reviewContent: "The abstract metal wall decor adds a contemporary touch to my space. The geometric patterns and the metallic finish create a visually striking effect. However, it was a bit challenging to install due to the complex design.",
    customerInfo: "Daniel P. - Feb 14, 2023"
    },
    
    {
    rating: 4,
    purchaseInfo: "Minimalist Portrait Art: Captivating Simplicity",
    reviewContent: "The minimalist portrait art is captivating in its simplicity. The use of negative space and the focus on essential features create an intriguing composition. However, the colors were slightly different from what I expected.",
    customerInfo: "Emma G. - Mar 6, 2023"
    },
    
    {
    rating: 4,
    purchaseInfo: "Sculptural Ceramic Bowl: Unique Centerpiece",
    reviewContent: "The sculptural ceramic bowl is a unique and eye-catching centerpiece for my dining table. The craftsmanship is impressive, but the bowl's size was smaller than anticipated. It's still a functional and decorative piece.",
    customerInfo: "Ryan T. - Apr 9, 2023"
    },
    
    {
    rating: 5,
    purchaseInfo: "Vibrant Pop Art: Retro Elegance",
    reviewContent: "This vibrant pop art piece exudes retro elegance. The bold colors and the iconic imagery bring a sense of nostalgia and fun to my living room. It's a fantastic addition to my collection.",
    customerInfo: "Emily H. - May 27, 2023"
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
