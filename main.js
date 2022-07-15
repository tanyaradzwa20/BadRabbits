




$(document).ready(function(){
    $('.your-class').slick({
        prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
        nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
    });
  });
  
  $('.modal').on('shown.bs.modal', function (e) {
    $('.your-class').slick('setPosition');
    $('.wrap-modal-slider').addClass('open');
  })
  
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




  
