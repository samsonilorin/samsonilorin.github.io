
// ============================================================
// LAWRENXO WEBSITE JAVASCRIPT
// ============================================================


// MOBILE MENU

const menuButton = document.getElementById("menuButton");

const navMenu = document.getElementById("navMenu");


menuButton.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SIMPLE SCROLL REVEAL

const revealElements =
    document.querySelectorAll(
        ".service-card, .about-content, .contact-card"
    );


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
