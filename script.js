// Welcome Message
console.log("Welcome to Studentverse!");

// Explore More Button
const exploreButton = document.querySelector(".btn");

if (exploreButton) {
    exploreButton.addEventListener("click", function() {
        console.log("Welcome to my portfolio!");
    });
}

// Navigation Active Effect
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.innerText);
    });
});

// Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.style.transform = "scale(1.05)";
        
        setTimeout(function() {
            card.style.transform = "scale(1)";
        }, 300);
    });
});

console.log("Studentverse Website Loaded Successfully!");