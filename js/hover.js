/**
 * Function to add hover effect to thumbnails
 * @param {string} thumbnailSelector - CSS selector for the thumbnail element
 * @param {string} imageId - ID of the image element to change
 * @param {string} defaultSrc - Source of the default image
 * @param {string} hoverSrc - Source of the image on hover
 */
function addHoverEffect(thumbnailSelector, imageId, defaultSrc, hoverSrc) {
    document.addEventListener("DOMContentLoaded", function () {
        const thumbnail = document.querySelector(thumbnailSelector);
        const defaultImage = document.getElementById(imageId);

        thumbnail.addEventListener("mouseover", function () {
            defaultImage.src = hoverSrc;
        });

        thumbnail.addEventListener("mouseout", function () {
            defaultImage.src = defaultSrc;
        });
    });
}

// Apply hover effects to specific elements

// Software Development
addHoverEffect(".hover-thumbnail-sw", "default-image-sw", "assets/img/Software1.png", "assets/img/Software2.png");

// AI Data
addHoverEffect(".hover-thumbnail-ai", "default-image-ai", "assets/img/AIML1.png", "assets/img/AIML2.png");

// Blockchain
addHoverEffect(".hover-thumbnail", "default-image", "assets/img/Blockchain1.png", "assets/img/Blockchain2.png");

// Investment
addHoverEffect(".hover-thumbnail-inv", "default-image-inv", "assets/img/investment1.png", "assets/img/Investment2.png");

// Books
addHoverEffect(".hover-thumbnail-bks", "default-image-bks", "assets/img/Books1.png", "assets/img/Books2.png");
