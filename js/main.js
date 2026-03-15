/* Template "main.js" for Poseify
 * This file is referenced by index.html but was missing from the workspace.
 * It provides basic interaction for the spinner, back-to-top button, and
 * initializes WOW.js and Owl Carousel if they are present.
 */

(function () {
    "use strict";

    // Spinner
    var spinner = function () {
        var spinnerEl = document.getElementById('spinner');
        if (spinnerEl) {
            spinnerEl.classList.remove('show');
        }
    };

    window.addEventListener('load', function () {
        spinner();

        // Initialize wow.js if available
        if (typeof WOW === 'function') {
            new WOW().init();
        }

        // Initialize Owl Carousel if available
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel === 'function') {
            $('.testimonial-carousel').owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                items: 1,
                dots: true,
                loop: true,
                nav: false
            });
        }
    });

    // Back to top button
    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();
