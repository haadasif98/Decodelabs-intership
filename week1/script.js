// ================================
// MOBILE MENU
// ================================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================================
// CLOSE MENU AFTER CLICK
// ================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================================
// DARK MODE
// ================================

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = darkBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ================================
// STICKY NAVBAR SHADOW
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


// ================================
// HERO BUTTON
// ================================

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {

    document.getElementById("products").scrollIntoView({

        behavior: "smooth"

    });

});


// ================================
// ADD TO CART
// ================================

const cartButtons = document.querySelectorAll(".product-card button");

let totalItems = 0;

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        totalItems++;

        alert("Product Added Successfully!\n\nItems in Cart : " + totalItems);

    });

});


// ================================
// SCROLL ANIMATION
// ================================

const cards = document.querySelectorAll(

".feature,.category-card,.product-card,.review"

);

function reveal() {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (cardTop < screenHeight - 100) {

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(60px)";

    card.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();


// ================================
// CONTACT FORM
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank You!\n\nYour message has been sent successfully.");

    form.reset();

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// LOADING MESSAGE
// ================================

window.addEventListener("load", () => {

    console.log("Trend Basket Loaded Successfully");

});