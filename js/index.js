// page elements
const menu = document.getElementById("menuButton")
const terminal = document.getElementById("terminalContainer");
const inputField = document.getElementById("terminalText");
const homeButton = document.getElementById("homeButton");
const projectButton = document.getElementById("projects");
const contactButton = document.getElementById("contact");
const stackButton = document.getElementById("stack");
const runButton = document.getElementById("run");
const clearButton = document.getElementById("clear")
const displayDiv = document.getElementById("mainContainer");

function displayTerminal() {
  terminal.style.display = "block";
  menu.style.display = "none";
}

menu.addEventListener("click", displayTerminal);


// makes input feild a string value
inputField.value = "";



// each pages button values to be put into the input feild 
homeButton.addEventListener("click", () => {
  inputField.value = "Profile_Home";
});

projectButton.addEventListener("click", () => {
  inputField.value = "Profile_Projects";
});

contactButton.addEventListener("click", () => {
  inputField.value = "Profile_Contact";
});

stackButton.addEventListener("click", () => {
  inputField.value = "Profile_Stack";
});

let currentPage = document.getElementById("begining");


// displays pages when "run" button clicked
runButton.addEventListener("click", () => {
  currentPage.style.display = "none";
  let id = inputField.value.toLowerCase();
  currentPage = document.getElementById(`${id}`);
  if (currentPage == null) {
    displayDiv.innerHTML = "<h1 id='error'>Please try Again</h1>";
    currentPage = document.getElementById("error");
    function refresh() {
      location.reload();
    }
    setInterval(refresh, 500);
  } else {
    currentPage.style.display = "block";
    inputField.value = ""; 
    terminal.style.display = "none";
    menu.style.display = "block"
  }
});

// clears input field and Hides
clearButton.addEventListener("click", () => {
  inputField.value = "";
  terminal.style.display = "none";
  menu.style.display = "block";
})
