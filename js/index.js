const terminal = document.getElementById('terminalContainer');
const home = document.getElementById('home');
const inputField = document.getElementById('terminalText');
const homeButton = document.getElementById('homeButton');
const projectButton = document.getElementById('projects');
const contactButton = document.getElementById('contact');
const stackButton = document.getElementById('stack');
const runButton = document.getElementById('run');
const displayDiv = document.getElementById('display');

inputField.value ="";


function displayTerminal() {
  terminal.style.display = 'block';
}
 setInterval(displayTerminal, 2000);


function homePage() {
  home.style.display = 'block';
}



homeButton.addEventListener('click', () => {
  inputField.value ="Profile_Home";
})

projectButton.addEventListener('click', () => {
  inputField.value ="Profile(Projects)";
})

contactButton.addEventListener('click', () => {
  inputField.value ="Profile(Contact)";
})

stackButton.addEventListener('click', () => {
  inputField.value ="Profile(Stack)";
})

runButton.addEventListener('click', () => {
  let id = inputField.value.toLowerCase();
  let x = document.getElementById(`${id}`);
  x.style.display = "block";
})






