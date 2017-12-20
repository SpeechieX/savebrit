/*--------------Save Brittany (Hangman Concept)-------------------*/

// constants


var questions = ["What’s Brittany Spears' middle name?",
                 "What does Brittany Spears say after making a mistake?",
                 "Who is the creator of Javascript?",
                 "What year did the USSR become Russia?",
                 "What is the name of the country formerly known as Rhodesia?",
                 "Where in the world is Carmen _______________?",
                 "What month is Brittany Spears' Birthday in?",
                 "What state was Brittany Spears' born in?",
                 "Brittany Spears' was once married to Kevin __________.",
                 "Baby Hit Me ____ _____ _____.",
                 "My Loneliness is ___________ me.",
                 "Brittany once kissed ___________ on stage.",
                 "What year did Iran become an Islamic Republic?",
                 "What is the capitol of Japan?",
                 "Diamonds are made up of almost entirely of what element?",
                 "How many hydrogen atoms are in one molecule of water?",
                 "Who is the King of Pop?",
                 "North Atlantic Treaty Organization",
                 "In what city is the United Nations HQ located?",
                 "9 x 19mm Parabellum = ___",
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
                 "Who released - I Got Dem Ol' Kozmic Blues Again Mama! - ?"

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
                "madonna",
                "1979",
                "tokyo",
                "carbon",
                "two",
                "micheal jackson",
                "nato",
                "geneva",
                "9mm",
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
            ]

var opacities = [1, 0.75, 0.5, 0.25, 0];











// state 
var answerkeyIdx, guess, letter, question, answer, misses, usedLetters;

// cached elements
var msgEl = document.getElementById('msg');
var guessEl = document.getElementById('guess');
var letterBtns = document.querySelectorAll('#keyboard button');
var imgEl = document.querySelector('#overlay img');
var overlayEl = document.querySelector('#overlay');

/*----------------------- event listeners----------------------*/
// When Start Button is Clicked Fire a Question
document.querySelector('#go').addEventListener('click', function () {
    init();
    render();
});

document.getElementById('keyboard').addEventListener('click', function(evt) {
    if (misses >= 4) return;
    // evt holding button content
    letter = evt.target.innerHTML;
    // check if letter in answer is exists
    if (answer.includes(letter)) {
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
}

function render(){
    msgEl.innerHTML = question;
    guessEl.innerHTML = guess.join('');
    renderKeyboard();
    imgEl.style.opacity = opacities[misses];
    if (misses < 4) {
        overlayEl.innerHTML = imgEl.outerHTML;
    } else {
        overlayEl.innerHTML = "<h1>Continue?</h1><h1>GAME OVER</h1>";
    }
}

function renderKeyboard() {
    for (var i=0; i < letterBtns.length; i++){
        letterBtns[i].style.visibility = (usedLetters.includes(letterBtns[i].innerHTML)) ? 'hidden' : 'visible';
    }
}

init();
render();





 



    














