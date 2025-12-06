
// --------- Main Index File --------- //
const engineerBTN = document.getElementById("engineerBTN");
const contactBTN = document.getElementById("contactBTN");
const backBTN = document.getElementById("backBTN");
const homeBTN = document.getElementById("homeBTN");
const techBTN = document.getElementById("techBTN");
const displayBTN = document.getElementById("displayBTN");

// --------- Service Buttons --------- //
const cardBTN = document.getElementById("cardBTN");
const cardBTN2 = document.getElementById("2ndcardBTN");
const cardBTN3 = document.getElementById("3rdcardBTN");
            
// Boolean to check if button was clicked
let buttonClicked = false;


// reset timer
let reset;
        
// Function that goes to next page
export function nextPage(element, url){
    setTimeout(() => {
        element.addEventListener("click", () => {
            buttonClicked = true;
            element.style.background = "blue";
            window.location.href = url;
        });
    }, 500)
}

// Idle System
export function initIdleSystem(buttonClicked) {
    setTimeout(() => {
        if (!buttonClicked) {
             window.alert("Click a button to explore product.");
        }
    }, 50000);
}       

// Service card button effects
export function checkIT(element){
    element.addEventListener("mouseover", () => {
        element.textContent = "Check it out!";
    });

    element.addEventListener("mouseout", () => {
        reset = setTimeout(() => {
            clearTimeout(reset);
            element.textContent = "Learn More";
        }, 500);
    });
} 

// toggle function for light and dark mode
export function toggle(){
    let isDark = false;

    displayBTN.onclick = function() {
        if (isDark){
            displayBTN.textContent = "Light Mode";
            isDark = false;
        }
        else {
            displayBTN.textContent = "Dark Mode";
            isDark = true;
        }
    }
}

toggle();
// checkIT function calls with each service button
checkIT(cardBTN);
checkIT(cardBTN2);
checkIT(cardBTN3);

// nextPage function calls with buttons and url params
nextPage(engineerBTN, "https://luisbenavides22.github.io/Portfolio/");
nextPage(contactBTN, "../pages/contact.html");
nextPage(backBTN, "../pages/index.html");
nextPage(homeBTN, "../pages/index.html");
nextPage(techBTN, "../pages/techstack.html");
initIdleSystem(buttonClicked);            