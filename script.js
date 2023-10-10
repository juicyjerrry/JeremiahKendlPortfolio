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

/* Dots 
const container = document.querySelector(".container");

container.addEventListener("mousemove", createDot);

function createDot(e) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    const size = Math.random() * 20 + 10; // Random size between 10 and 30 pixels
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.top = `${e.clientY - size / 2}px`;
    dot.style.left = `${e.clientX - size / 2}px`;

    container.appendChild(dot);

    // Remove dots after a certain time (e.g., 1 second)
    setTimeout(() => {
        dot.remove();
    }, 1000);
}
*/


