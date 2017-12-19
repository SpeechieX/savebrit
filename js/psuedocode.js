
// /*--------------Save Brittany (Hangman Concept)-------------------*/

// constants
var answers


// state
var brit, hair, gameOver 

// cached elements
var quests
var key // character answers   


/*----------------------- event listeners----------------------*/

var msgEl = document.getElementById('msg');

// + Once Div fades out 100% Triggers Event Listener (gameOver)



/*------------------------- functions--------------------------*/



function init() {
    // + Game Initializes w Question (25 Random Questions)

}

function render(){
    // + If value is correct, letter is rendered, consequence bypassed 
    // + Consequence is Brit loses hair (div fadeOut * .2)
    // + Player enters values(letter) (if value is incorrect; consequence event)
    // + I'd like to include audio once consequence event is triggered
    
}

function victoryKey(){
    
}

$(function(){
    var $write = $('#write'),
        shift = false,
        capslock = false;
     
    $('#keyboard li').click(function(){
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
         
        // Shift keys
        if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
            $('.letter').toggleClass('uppercase');
            $('.symbol span').toggle();
             
            shift = (shift === true) ? false : true;
            capslock = false;
            return false;
        }
         
        // Caps lock
        if ($this.hasClass('capslock')) {
            $('.letter').toggleClass('uppercase');
            capslock = true;
            return false;
        }
         
        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();
             
            $write.html(html.substr(0, html.length - 1));
            return false;
        }
         
        // Special characters
        if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";
         
        // Uppercase letter
        if ($this.hasClass('uppercase')) character = character.toUpperCase();
         
        // Remove shift once a key is clicked.
        if (shift === true) {
            $('.symbol span').toggle();
            if (capslock === false) $('.letter').toggleClass('uppercase');
             
            shift = false;
        }
         
        // Add the character
        $write.html($write.html() + character);
    });
});







// + I'd like to implement jQ Animations for this project
// render keyboard?
// .join() / .split()
