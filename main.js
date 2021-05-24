
// Add active class to the current button (highlight it)
var header = document.getElementById("machine-menu");
var btns = header.getElementsByClassName("machine");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// FORM STEP CSRIPT
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");



var progress = document.getElementById("progress");

window.addEventListener('load', function () {
    var head = document.getElementById('steprow').children;
    head.item(1).setAttribute('style', 'color:white');
    
  })

Next1.onclick = function(){
    Form1.style.left = "-800px";
    Form2.style.left = "0";
    progress.style.width = "240px";
    var head = document.getElementById('steprow').children;
    head.item(2).setAttribute('style', 'color:white');
}

Back1.onclick = function(){
    Form1.style.left = "0";
    Form2.style.left = "800px";
    progress.style.width = "120px";
    var head = document.getElementById('steprow').children;
    head.item(2).setAttribute('style', 'color:black');
}

Next2.onclick = function(){
    Form2.style.left = "-800px";
    Form3.style.left = "0";
    progress.style.width = "360px";
    var head = document.getElementById('steprow').children;
    head.item(3).setAttribute('style', 'color:white');
}

Back2.onclick = function(){
    Form2.style.left = "0";
    Form3.style.left = "800px";
    progress.style.width = "240px";
    var head = document.getElementById('steprow').children;
    head.item(3).setAttribute('style', 'color:black');
}

// <!-- summary-details -->
const booking_form = document.querySelector('.summary-details');
    document.querySelector('.btn-summary').onclick = function(){
      this.classList.toggle('active')
      booking_form.classList.toggle('active');
    }