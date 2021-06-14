// page elements
const terminal = document.getElementById("terminalContainer");
const inputField = document.getElementById("terminalText");
const homeButton = document.getElementById("homeButton");
const projectButton = document.getElementById("projects");
const contactButton = document.getElementById("contact");
const stackButton = document.getElementById("stack");
const runButton = document.getElementById("run");
const clearButton = document.getElementById("clear")
const displayDiv = document.getElementById("mainContainer");

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

let x = document.getElementById("begining");


// displays pages when "run" button clicked
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
    setInterval(refresh, 500);
  } else {
    x.style.display = "block";
    console.log(x);
  }
});

// clears input field
clearButton.addEventListener("click", () => {
  inputField.value = "";
})
