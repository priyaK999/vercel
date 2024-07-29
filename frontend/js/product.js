// script.js
document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const mainProductImage = document.getElementById("mainProductImage");

    productCards.forEach(card => {
        card.addEventListener("click", () => {
            // Change the background color of the clicked card
            productCards.forEach(card => card.style.backgroundColor = "white"); // Reset background color of all cards
            card.style.backgroundColor = "rgb(245 249 255)";

            // Change the main product image
            const newImageUrl = card.getAttribute("data-image");
            mainProductImage.src = newImageUrl;
        });
    });
});
