document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".review-image");

    images.forEach(function(image) {
        image.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior
            showImageInCenter(this.src);
        });
    });

    function showImageInCenter(src) {
        var modal = document.createElement("div");
        modal.classList.add("modal");

        var modalContent = document.createElement("img");
        modalContent.src = src;
        modalContent.classList.add("modal-content");

        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        modal.addEventListener("click", function() {
            document.body.removeChild(modal);
        });
    }
});