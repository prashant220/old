(function($) { 
  $(function() { 
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); 
})(jQuery);


// type
var _CONTENT = [ 
  "Innovate Your logic" 
  // "Up above the world so high", 
  // "Like a diamond in the sky"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
  // Get substring with 1 characater added
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if(text === _CONTENT[_PART]) {
    // Hide the cursor
    _CURSOR.style.display = 'none';

    clearInterval(_INTERVAL_VAL);
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if(text === '') {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if(_PART == (_CONTENT.length - 1))
      _PART = 0;
    else
      _PART++;
    
    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function() {
      _CURSOR.style.display = 'inline-block';
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 50);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


$('.btn btn-primary').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 'slow');
});






// sticky
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $(".nav-bar").css("background" , "#100449");
    }

    else{
      $(".nav-bar").css("background" , "transparent");   
    }
  })
})

// top


$('#button').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 'slow');
});



