const icon = document.getElementById('icon');
const menu = document.getElementById('menu');




function mouseOver() {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}



icon.addEventListener("click", mouseOver);
