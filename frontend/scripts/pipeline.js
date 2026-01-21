const backBTN = document.getElementById("backBTN");
const techBTN = document.getElementById("techBTN");
const contactBTN = document.getElementById("contactBTN");
const engineerBTN = document.getElementById("engineerBTN");
const displayBTN = document.getElementById("displayBTN");
const aboutBTN = document.getElementById("aboutBTN");

export function nextPage(element, url) {
    setTimeout(() => {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }, 500);
}

nextPage(aboutBTN, "../../index.html");
nextPage(engineerBTN, "https://luisbenavides22.github.io/Portfolio/");
nextPage(contactBTN, "contact.html");
nextPage(backBTN, "../../index.html");
nextPage(techBTN, "techstack.html");
