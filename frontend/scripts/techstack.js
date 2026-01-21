// techstack.js - Technology Stack Page
const engineerBTN = document.getElementById("engineerBTN");
const contactBTN = document.getElementById("contactBTN");
const backBTN = document.getElementById("backBTN");
const homeBTN = document.getElementById("homeBTN");
const techBTN = document.getElementById("techBTN");
const displayBTN = document.getElementById("displayBTN");

const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

let tools = [
    {name: "Python", img: "../assets/python.png", desc: "Python is a versatile programming language widely used for data analysis, machine learning, and backend development."},
    {name: "Javascript", img: "../assets/javascript.png", desc: "JavaScript is used for web development to create interactive websites and dynamic user interfaces."},
    {name: "HTML5", img: "../assets/html.png", desc: "HTML5 is the standard markup language for structuring web content."},
    {name: "CSS", img: "../assets/css1010.png", desc: "CSS is used for styling HTML content and creating visually appealing websites."},
    {name: "Pandas", img: "../assets/pandas.png", desc: "Pandas is a Python library for data manipulation and analysis, especially with tabular data."},
    {name: "Matplotlib", img: "../assets/matplotlib.png", desc: "Matplotlib is a Python library for creating static, interactive, and animated visualizations."}
];

let currentIndex = 0;

function showTool(index){
    const image = document.getElementById("image");
    const toolName = document.getElementById("tool-name");
    const toolDesc = document.getElementById("tool-desc-p");

    image.src = tools[index].img;
    toolName.textContent = tools[index].name;
    toolDesc.textContent = tools[index].desc;
}

backButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + tools.length) % tools.length;
    showTool(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % tools.length;
    showTool(currentIndex);
});

// Initialize first tool
showTool(currentIndex);

// Navigation buttons
function nextPage(element, url){
    setTimeout(() => {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }, 500);
}

nextPage(engineerBTN, "https://luisbenavides22.github.io/Portfolio/");
nextPage(contactBTN, "contact.html");          // same folder (pages)
nextPage(backBTN, "../../index.html");         // back to root
nextPage(homeBTN, "../../index.html");         // back to root
nextPage(techBTN, "techstack.html");           // same folder


// Light/Dark toggle
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
