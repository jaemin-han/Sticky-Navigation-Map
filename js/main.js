$(document).on("scroll", function() { 
  if($(document).scrollTop() > 50 ) {
    $('nav').removeClass("large").addClass("small");
  }
  else { 
    $('nav').removeClass("small").addClass("large");
  }
});


