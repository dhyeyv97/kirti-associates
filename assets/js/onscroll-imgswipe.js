/*====================
  onscroll imgswipe js
=======================*/

document.addEventListener("scroll", function () {
    // Get all elements with the .banner-img class
    var bannerImages = document.querySelectorAll(".portfolio-image");

    // Loop through each .banner-img element
    bannerImages.forEach(function (bannerImg) {
        // Get the distance from the top of the document to the element
        var elementTop =
            bannerImg.getBoundingClientRect().top + window.scrollY;

        // Calculate the scroll trigger point (250 pixels after the element comes into view)
        var triggerPoint = elementTop - window.innerHeight + 250;

        // Get the current scroll position of the window
        var scrollPosition = window.scrollY || window.pageYOffset;

        // Check if the current scroll position has passed the trigger point
        if (scrollPosition >= triggerPoint) {
            bannerImg.classList.add("show");
        }
    });
});