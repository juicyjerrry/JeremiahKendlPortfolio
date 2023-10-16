/* Slide Out Recipe Card */
var panels = document.getElementsByClassName("flex");
var i;
for (i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", function(){      
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
}

/* Fade Out */
window.addEventListener('scroll', function() {
    var topElements = document.querySelectorAll('#fade');
    var scrollPosition = window.scrollY;

    topElements.forEach(function(element) {
        element.style.opacity = 1 - scrollPosition / 250;
    });
});

/* Cursor Circle */
const cursorCircle = document.getElementById('cursor-circle');
const clickedCirclesContainer = document.getElementById('clicked-circles');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;

  cursorCircle.style.left = mouseX - cursorCircle.clientWidth / 2 + 'px';
  cursorCircle.style.top = mouseY - cursorCircle.clientHeight / 2 + 'px';
});

document.addEventListener('click', (e) => {
  const clickedCircle = document.createElement('div');
  clickedCircle.className = 'clicked-circle';
  clickedCircle.style.left = mouseX - cursorCircle.clientWidth / 2 + 'px';
  clickedCircle.style.top = mouseY - cursorCircle.clientHeight / 2 + 'px';
  clickedCirclesContainer.appendChild(clickedCircle);

  const randomColor = getRandomColor();
  cursorCircle.style.backgroundColor = randomColor;
  clickedCircle.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generates a random hex color
  return randomColor;
}
