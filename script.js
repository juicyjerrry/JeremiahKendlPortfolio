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
let cursorColor = getRandomColor();

cursorCircle.style.backgroundColor = cursorColor;

document.addEventListener('mousemove', (e) => {
  const { pageX: x, pageY: y } = e;
  cursorCircle.style.left = x - cursorCircle.clientWidth / 2 + 'px';
  cursorCircle.style.top = y - cursorCircle.clientHeight / 2 + 'px';
});

document.addEventListener('click', (e) => {
  const { pageX: x, pageY: y } = e;

  const clickedCircle = document.createElement('div');
  clickedCircle.className = 'clicked-circle';
  clickedCircle.style.left = x - cursorCircle.clientWidth / 2 + 'px';
  clickedCircle.style.top = y - cursorCircle.clientHeight / 2 + 'px';
  clickedCircle.style.backgroundColor = cursorColor; // Match the cursorColor
  clickedCirclesContainer.appendChild(clickedCircle);

  cursorColor = getRandomColor(); // Generate a new random color for the next cursorCircle
  cursorCircle.style.backgroundColor = cursorColor; // Set the cursorCircle color
});

document.getElementById('eraser-button').addEventListener('click', () => {
  clickedCirclesContainer.innerHTML = '';
});

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



