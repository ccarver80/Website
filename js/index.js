const terminal = document.getElementById("terminalContainer");
const home = document.getElementById("home");
const inputField = document.getElementById("terminalText");
const homeButton = document.getElementById("homeButton");
const projectButton = document.getElementById("projects");
const contactButton = document.getElementById("contact");
const stackButton = document.getElementById("stack");
const runButton = document.getElementById("run");
const displayDiv = document.getElementById("display");

inputField.value = "";

function displayTerminal() {
  terminal.style.display = "block";
}
setInterval(displayTerminal, 1000);

function homePage() {
  home.style.display = "block";
}

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

let x = document.getElementById("begining");

runButton.addEventListener("click", () => {
  x.style.display = "none";
  let id = inputField.value.toLowerCase();
  x = document.getElementById(`${id}`);
  if (x == null) {
    displayDiv.innerHTML = "<h1 id='error'>Please try Again</h1>";
    x = document.getElementById("error");
    function refresh() {
      location.reload();
    }
    setInterval(refresh, 2000);
  } else {
    x.style.display = "block";
    console.log(x);
  }
});
