let hamburguer = document.querySelector(".hamburguer-menu");


window.addEventListener('scroll', function()  {
    let hamburguer = document.querySelector(".hamburger-menu");
    let posicion = hamburguer.getBoundingClientRect().top;
    console.log(posicion)
     if (posicion < -80){
       hamburguer.classList.add("hamburguer-menu-scroll")
     } 
})

document = mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  console.log("ran");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var btn = $("#top-button-id");

$(window).scroll(function() {
  if ($(window).scrollTop() > 150) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});



