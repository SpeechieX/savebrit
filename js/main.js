/*--------------Save Brittany (Hangman Concept)-------------------*/

// constants


var questions = ["What’s Brittany’s middle name?",
                 "What does Brittany say after making a mistake?",
                 "Who is the creator of Javascript?",
                 "What year did the USSR become Russia?",
                 "What is the name of the country formerly known as Rhodesia?",
                 "Where in the world is Carmen _______________?",
                 "What month is Brittany’s Birthday in?",
                 "Brittany was once married to Kevin __________.",
                 "Baby Hit Me ____ _____ _____.",
                 "My Loneliness is ___________ me.",
                 "Brittany once kissed ___________ on stage.",
                 "What state was Brittany born in?"
]

var answers = [ "jean",
                "oops i did it again",
                "brendan eich",
                "1922",
                "zimbabwe",
                "sandiego",
                "december",
                "mississippi",
                "federline",
                "one more time",
                "killing",
                "madonna"
]

var question


// state 

var answerkeyIdx, guess, winner



                 

    
    



// cached elements

var key // character answers   
var msgEl = document.getElementById('msg');

/*----------------------- event listeners----------------------*/
// When Start Button is Clicked Fire a Question
document.querySelector('#go')
addEventListener('click', function begin() {
    init()
    msgEl.innerHTML = question;

});

// When Answer is Correct Move to Next Question



// When Answer is Incorrect - 1


// When Game is Over (gameOver)

/*------------------------- functions--------------------------*/
// + Once Div fades out 100% Triggers Event Listener (gameOver)
function init() {
    question = questions[Math.floor(Math.random() * questions.length)]

    
 

}
function render(){
    
    
    
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

// init();
// render();


    














