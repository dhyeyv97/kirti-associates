/*========================
    infinite js
==========================*/
document.addEventListener("DOMContentLoaded", function () {
    const featuredBoxes = document.querySelectorAll('#infinite-list .featured-box, #infinite-list .job-box, #infinite-list .blog-grid-box');
    const boxesPerPage = 3;


    for (let i = 0; i < featuredBoxes.length; i++) {
        if (i < 6) {
            featuredBoxes[i].style.display = 'block';
        } else {
            featuredBoxes[i].style.display = 'none';
        }
    }

    let lastRevealedIndex = 5;


    const revealNextBoxes = () => {
        const startIndex = lastRevealedIndex + 1;
        const endIndex = Math.min(lastRevealedIndex + boxesPerPage, featuredBoxes.length - 1);

        for (let i = startIndex; i <= endIndex; i++) {
            featuredBoxes[i].style.display = 'block';
        }

        lastRevealedIndex = endIndex;
    };


    window.addEventListener('scroll', () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const lastBox = featuredBoxes[lastRevealedIndex];
        const threshold = lastBox.offsetTop + lastBox.offsetHeight +
            200;

        if (scrollPosition >= threshold) {
            revealNextBoxes();
        }
    });
});