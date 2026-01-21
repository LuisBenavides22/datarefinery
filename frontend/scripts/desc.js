const engineerBTN = document.getElementById("engineerBTN");
const contactBTN = document.getElementById("contactBTN");
const backBTN = document.getElementById("backBTN");
const homeBTN = document.getElementById("homeBTN");
const techBTN = document.getElementById("techBTN");

function nextPage(element, url){
    setTimeout(() => {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }, 500);
}

nextPage(engineerBTN, "https://luisbenavides22.github.io/Portfolio/");
nextPage(contactBTN, "../pages/contact.html");
nextPage(backBTN, "../index.html");
nextPage(homeBTN, "../index.html");
nextPage(techBTN, "techstack.html");
