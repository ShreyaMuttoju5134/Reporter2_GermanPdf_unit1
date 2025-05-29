document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");
    const message = document.getElementById("message");

    if (button) {
        button.addEventListener("click", function () {
            console.log("Button clicked!");

            // Show the hidden message
            message.style.display = "block";

            // Toggle Bootstrap button color class
            button.classList.toggle("btn-success");
        });
    } else {
        console.error("Button not found");
    }
});

// owl carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});