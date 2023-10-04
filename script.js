/* document.getElementById('now').addEventListener('click', function() {
  var paragraphs = document.getElementsByClassName('hidden1');

  for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].style.display === 'none' || paragraphs[i].style.display === '') {
      paragraphs[i].style.display = 'block';
    } else {
      paragraphs[i].style.display = 'none';
    }
  }
});

document.getElementById('works').addEventListener('click', function() {
  var paragraphs = document.getElementsByClassName('hidden2');

  for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].style.display === 'none' || paragraphs[i].style.display === '') {
      paragraphs[i].style.display = 'block';
    } else {
      paragraphs[i].style.display = 'none';
    }
  }
});

document.getElementById('contact').addEventListener('click', function() {
  var paragraphs = document.getElementsByClassName('hidden3');

  for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].style.display === 'none' || paragraphs[i].style.display === '') {
      paragraphs[i].style.display = 'block';
    } else {
      paragraphs[i].style.display = 'none';
    }
  }
});
 */
var panels = document.getElementsByClassName("outline");
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

