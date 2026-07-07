// Welcome Message
console.log("Welcome to AutoVerse!");

// Explore Cars Button
const exploreButton = document.querySelector(".hero button");

exploreButton.addEventListener("click", function () {
    alert("Welcome to AutoVerse! 🚗 Let's explore amazing cars.");
});

// Search Function
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", function () {

    let car = searchInput.value.toLowerCase();

    if (car === "ferrari") {
        alert("Ferrari found! 🏎️");
    }

    else if (car === "bmw") {
        alert("BMW found! 🚘");
    }

    else if (car === "bentley") {
        alert("Bentley found! 💎");
    }

    else if (car === "") {
        alert("Please enter a car name.");
    }

    else {
        alert("❌ Sorry! Car not found.");
    }

});
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("Car Details page will be added soon! 🚗");

    });

});
// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML="☀️";
    }
    else{
        themeBtn.innerHTML="🌙";
    }

});
const favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach(function(button){

    button.addEventListener("click", function(){

        button.classList.toggle("favorite");

        if(button.classList.contains("favorite")){
            button.innerHTML="❤️ Favorite";
        }else{
            button.innerHTML="🤍 Favorite";
        }

    });

});
function searchCars() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let ferrari = document.getElementById("ferrari");
    let bmw = document.getElementById("bmw");
    let bentley = document.getElementById("bentley");

    ferrari.style.display = "none";
    bmw.style.display = "none";
    bentley.style.display = "none";

    if (input === "") {
        ferrari.style.display = "block";
        bmw.style.display = "block";
        bentley.style.display = "block";
    }

    else if (input.includes("ferrari")) {
        ferrari.style.display = "block";
    }

    else if (input.includes("bmw")) {
        bmw.style.display = "block";
    }

    else if (input.includes("bentley")) {
        bentley.style.display = "block";
    }

}
// Navbar Scroll Effect

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.boxShadow = "none";
    }

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});