// Navbar Buttons
const engineerBTN = document.getElementById("engineerBTN");
const contactBTN = document.getElementById("contactBTN");
const backBTN = document.getElementById("backBTN");
const homeBTN = document.getElementById("homeBTN");
const techBTN = document.getElementById("techBTN");
const displayBTN = document.getElementById("displayBTN");
const displayBTN2 = document.getElementById("displayBTN"); // optional duplicate reference

// Tool Description Variables
const image = document.getElementById("image");
const description1 = document.getElementById("tool-desc-p");
const tool = document.getElementById("tool-name");

// Buttons for Techstack navigation
const next = document.getElementById("next");
const back = document.getElementById("back");

// Tracks which skill is currently displayed
let currentIndex = 0;

// Skill Description Data
let arr = [
    {
        name: "Python",
        img: "../assets/python.png",
        description: "Powerful language used for data handling and automation that powers overall product."
    },
    {
        name: "JavaScript",
        img: "../assets/javascript.png",
        description: "Scripting language that drives interactivity, logic, and dynamic behavior in applications."
    },
    {
        name: "HTML5",
        img: "../assets/html.png",
        description: "Markup language used to structure and organize content on the web."
    },
    {
        name: "CSS",
        img: "../assets/css1010.png",
        description: "Styling language used to design layouts, animations, and visual presentation."
    },
    {
        name: "Pandas",
        img:"../assets/pandas.png",
        description: "Python library for data manipulation, analysis, and working with structured datasets."
    },
    {
        name: "Matplotlib",
        img:"../assets/matplotlib.png",
        description: "Data visualization library used to create charts, graphs, and visual insights."
    }
];

// Updates the displayed tool name, image, and description based on currentIndex
export function display(){
    tool.textContent = arr[currentIndex].name;
    image.src = arr[currentIndex].img;
    description1.textContent = arr[currentIndex].description;
}

// Initial render on page load
display();

// Handles next/back button logic for cycling through tools
export function toggleTools(){
    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % arr.length;
        display();
    });

    back.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + arr.length) % arr.length;
        display();
    });
}

// Adds click navigation behavior to any element with a target URL
export function nextPage(element, url){
    setTimeout(() => {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }, 500)
}

// Initialize tool navigation and theme toggle
toggleTools();
toggle();

// Page navigation bindings
nextPage(engineerBTN, "https://luisbenavides22.github.io/Portfolio/");
nextPage(contactBTN, "contact.html");
nextPage(backBTN, "../index.html");
nextPage(homeBTN, "../index.html");
nextPage(techBTN, "techstack.html");
