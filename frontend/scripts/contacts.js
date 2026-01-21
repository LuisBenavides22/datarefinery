const engineerBTN = document.getElementById("engineerBTN");
const contactBTN = document.getElementById("contactBTN");
const backBTN = document.getElementById("backBTN");
const homeBTN = document.getElementById("homeBTN");
const techBTN = document.getElementById("techBTN");
const displayBTN = document.getElementById("displayBTN");
const technologyBTN = document.getElementById("technologyBTN");
const afterENGBTN = document.getElementById("afterENGBTN");

function nextPage(element, url){
    setTimeout(() => {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }, 500);
}

nextPage(engineerBTN, "https://luisbenavides22.github.io/Portfolio/");
nextPage(contactBTN, "contact.html");
nextPage(backBTN, "../../index.html");
nextPage(homeBTN, "../../index.html");
nextPage(techBTN, "techstack.html");

// toggle function for light and dark mode
function toggle(){
    let isLight = false;

    displayBTN.onclick = function() {
        if (!isLight){
            document.body.classList.add("light-mode");
            displayBTN.textContent = "Light Mode";
        }
        else {
            document.body.classList.remove("light-mode");
            displayBTN.textContent = "Dark Mode";
        }
        isLight = !isLight;
    };
}

toggle();

// nextPage function calls for after-box elements
nextPage(technologyBTN, "techstack.html");
nextPage(afterENGBTN, "https://luisbenavides22.github.io/Portfolio/");
