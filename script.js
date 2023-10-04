document.getElementById('now').addEventListener('click', function() {
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


