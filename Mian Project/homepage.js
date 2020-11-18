

function myFunction1In() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction1Out(e) {
  if (!!e && !!e.target && !e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown1");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function myFunctionIn2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myfunctionout2(x) {
  if (!!x && !!x.target && !x.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


document.getElementsByClassName('hero-text')[1].style.display = "none"
document.getElementsByClassName('hero-text')[2].style.display = "none"
var imgindex = 1;
function plusSlides(n) {
  document.getElementsByClassName('hero-text')[1].style.display = ""

  document.getElementsByClassName('hero-text')[2].style.display = ""

  showimg(imgindex += n);
}
function currentSlide(n) {
  showimg(imgindex = n);
}
function showimg(n) {
  var i;
  var slides = document.getElementsByClassName("slide")
  var dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    imgindex = 1;
  }
  if (n < 1) {
    imgindex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[imgindex - 1].style.display = "flex";
  dots[imgindex - 1].className += " active";
}


