
// SERVICE SCRIPT
var li_elements = document.querySelectorAll(".machine-menu ul li");
var item_elements = document.querySelectorAll(".change");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
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

