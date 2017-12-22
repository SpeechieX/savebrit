/*--------------Save Brittany (Hangman Concept)-------------------*/

// constants
var questions = ["What’s Brittany Spears' middle name?",
                 "What does Brittany Spears say after making a mistake?",
                 "Who is the creator of Javascript?",
                 "Which president installed a secret taping system in the White House",
                 "What is the name of the country formerly known as Rhodesia?",
                 "Where in the world is Carmen _______________?",
                 "What month is Brittany Spears' Birthday in?",
                 "What state was Brittany Spears' born in?",
                 "Brittany Spears' was once married to Kevin __________.",
                 "Baby Hit Me ____ _____ _____.",
                 "My Loneliness is ___________ me.",
                 "Brittany once kissed ___________ on stage.",
                 "What's the name of Mozilla's private browsing app?",
                 "What is the capitol of Japan?",
                 "Diamonds are made up of almost entirely of what element?",
                 "How many hydrogen atoms are in one molecule of water?",
                 "Who is the King of Pop?",
                 "North Atlantic Treaty Organization",
                 "In what city is the United Nations HQ located?",
                 "What is the capital of Madagascar?",
                 "What's the abbreviation of US Special Operations Command? ",
                 "What country is south of Romainia bordering the Black Sea?",
                 "The city of Timbuktu is now located in a country called _____",
                 "What are the two compounds found in marijuana known to cure cancer?",
                 "What is the deadliest drug in America?",
                 "Which Louisiana State Representive also served as a Grand Wizard of the KKK?",
                 "Who planned to create a Gold Dinar to buy oil without US Dollars and was killed for it?",
                 "What is observed a few minutes before sunset on Friday until the appereance of 3 stars on Saturday?",
                 "What version of Linux is popular for penetration?",
                 "Certified Information Systems Security Professional",
                 "What is an OSCP?",
                 "Who released - The Dark Side of the Moon? -",
                 "Who released - Electric Ladyland? -",
                 "Who released - I Got Dem Ol' Kozmic Blues Again Mama! - ?",
                 "What was the middle name of John F. Kennedy?",
                 "How many universities did JFK attend?",
                 "Who's the villian in the move 'The Last Dragon'?",
                 "Who made 'Chinese Connection?",
                 "How old is Chuck Norris?",
                 "Musashi ________.",
                 "The animation Trigun references which classic Western?",


]

var answers = [ "jean",
                "oops i did it again",
                "brendan eich",
                "kennedy",
                "zimbabwe",
                "sandiego",
                "december",
                "mississippi",
                "federline",
                "one more time",
                "killing",
                "madonna",
                "firefox focus",
                "tokyo",
                "carbon",
                "two",
                "micheal jackson",
                "nato",
                "geneva",
                "antananarivo",
                "socom",
                "bulgaria",
                "mali",
                'thc and cbd',
                "fentanyl",
                "david duke",
                "muammar gaddafi",
                "shabbat",
                "kali",
                "cissp",
                "offensive security certified professional",
                "pink floyd",
                "jimi hendrix",
                "janis joplin",
                "fitzgerald",
                "two",
                "sho nuff",
                "bruce lee",
                "infinite",
                "miyamoto",
                "gunsmoke",





                
            ]

var opacities = [1, 0.75, 0.5, 0.25, 0];

// state 
var answerkeyIdx, guess, letter, question, answer, misses, usedLetters, correcto, winner;

// cached elements
var msgEl = document.getElementById('msg');
var guessEl = document.getElementById('guess');
var letterBtns = document.querySelectorAll('#keyboard button');
var imgEl = document.querySelector('#overlay img');
var overlayEl = document.querySelector('#overlay');

/*----------------------- event listeners----------------------*/
// When Start Button is Clicked Fire a Question
// allows player to skip a turn
document.querySelector('#go').addEventListener('click', function() {
    init();
    render();
});
// next button controls
document.querySelector('#forward').addEventListener('click', function() {
    init();
    render();
    // resets button placement after win
    document.querySelector('#forward').style.display = 'none';
    document.querySelector('#go').style.display = 'inline';
});
document.getElementById('keyboard').addEventListener('click', function(evt) {
    if (misses >= 4) return; // killswitch (can't continue on red)
    // evt holding button content
    letter = evt.target.innerHTML;
    // check if letter in answer is exists
    if (answer.includes(letter)) {
        if (!correcto.includes(letter)) {
            correcto.push(letter);
            // filters correct answerts to uniqueAnswer (also takes out spaces of answers)
            var uniqueAnswer = answer.filter((elem, pos) => answer.indexOf(elem) === pos && elem !== ' ')
            // rules for win screen
            if (correcto.length === uniqueAnswer.join("").split("").length) {
                winner = true;
            }
        }
        answer.forEach(function(char, idx) {
            if (char === letter) guess[idx] = letter;
        });
    } else {
        misses++;
    }
    usedLetters.push(letter);
    render();
});
/*------------------------- functions--------------------------*/
function init() {
    // creates random number that selects question : answer pair
    var random = Math.floor(Math.random() * questions.length);
    question = questions[random];
    answer = answers[random].split('');
    guess = new Array(answer.length).fill('_');
    // replace underscores where there are spaces
    answer.forEach(function(char, idx) {
        if (char === ' ') guess[idx] = ' ';
    });
    letter = null;
    misses = 0;
    usedLetters = [];
    correcto = [];
    winner = false;
}

function render(){
    msgEl.innerHTML = question;
    guessEl.innerHTML = guess.join('');
    renderKeyboard();
    imgEl.style.opacity = opacities[misses];
    if (misses < 4) {
        overlayEl.innerHTML = imgEl.outerHTML;
    } else {
        overlayEl.innerHTML = "<h1 align='center'><img src='https://i.imgur.com/WzfTAy8.png'height='324' width='430'></h1>";
    }
    if (winner) {
        overlayEl.innerHTML = "<h1><img src='https://i.imgur.com/WQCIft5.gif'height='324' width='430'></h1>";
        document.querySelector('#forward').style.display = "inline"
        document.querySelector('#go').style.display = "none"

    }
}
function renderKeyboard() {
    for (var i=0; i < letterBtns.length; i++){
        letterBtns[i].style.visibility = (usedLetters.includes(letterBtns[i].innerHTML)) ? 'hidden' : 'visible';
    }
}

init();
render();

















 



    














