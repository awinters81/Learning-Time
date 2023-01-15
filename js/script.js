// I need to begin creating elements that will pull from elements in my HTML document. So..

var newQuestion = 0;

//HTML Elements

var startingPhase = document.getElementById('starting');
var inquiryPhase = document.getElementById('inquiry');
var endingPhase = document.getElementById('ending');
var tickTock = document.getElementById('begin');
var inquiryTitle = document.getElementById ('ask')
var option = document.getElementById ('select')

//And I have to create a variable for my questions. It would have to be an array? Or I need to create a dictionary?
// I'm going to test with one question before creating more.
// I know that I need the question, choices, and the correct answer all in one grouping, so...

//Questions

var questions = [
  
    {
        question: ' This is a test?',
        // I think my options would have to be a string, since I have to choose the correct answer from a selection
        options: [ 'a. incorrect', 'b. correct', 'c. incorrect', 'd. incorrect'],
        answer: 'b. correct',
    },

];



// Function to start quiz

function beginQuiz(){

// So, then I went back and created classes for the question phase
// and the ending, because I need to be able to show and hid the parts I need to.
// So, here, I would need to hide my intro, and show the questions.
// I would also need call a function to start the questions, which I set up earlier.

startingPhase.setAttribute('class', 'start-hide');
inquiryPhase.removeAttribute('class', 'hidden');
beginInquiry();
}

//I'm probably going to need a function to pull and loop through the questions...

function beginInquiry(){

//So this variable isn't working properly... it "works", but nothing is rendering properly...

var current = questions[newQuestion];

inquiryTitle.textContent = current.question;

// if I need the choices to change... loop through each array?
// so..

for (var i = 0; i < current.options; i++)

//... so buttons for the choices?

var selectChoice = document.createElement('button');
var answers = current.options[i];

selectChoice.setAttribute('class', 'select');
selectChoice.setAttribute('value', select);

selectChoice.textContent = i + 1 + '.' + answers;

option.appendChild(selectChoice);
}

//Something needs to happen when I click on an answer...

function clickChoice(event) {
// For when the answer is picked...
// So when I had this variable outside this function, it couldn't be read properly...
var pushButton = event;
    if (pushButton.matches('select')) {
        return;
    }

}

//function questionPull(){


//}

//Let me start with my listener since I know I have a button in my HTML.
//I know I'll have to create a function down the line to link to the button.
// I didn't create the correct variable for the button.

tickTock.click = beginQuiz
