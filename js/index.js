const menu = document.getElementById('menu');
const icon = document.getElementById('icon');



function mouseOver() {
  menu.style.display = "block";
}

function mouseOut() {
  menu.style.display = "none";
}

icon.addEventListener("mouseover", mouseOver);
icon.addEventListener("mouseout", mouseOut);
