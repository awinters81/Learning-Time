// I need to begin creating elements that will pull from elements in my HTML document. So..

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
inquiryPhase.removeAttribute('class', 'inquiry-hide');
beginInquiry();

}

//I'm probably going to need a function to pull and loop through the questions...

function beginInquiry(){

//Creating variable to pull from the array, and if that doesn't work, create another function?

var current = [questions];

inquiryTitle.textContent = current.question;

//... so buttons for the choices?

var selectChoice = document.createElement('button');

selectChoice.setAttribute('id', 'select');
selectChoice.setAttribute('value', options);
}


//Earlier, I did say that I needed a function to get my questions, so...
//I don't want all the questions to be pulled at the same time, so should I
//create a variable for just the current question?

//function questionPull(){


//}

//Let me start with my listener since I know I have a button in my HTML.
//I know I'll have to create a function down the line to link to the button.
// I didn't create the correct variable for the button.

tickTock.click = beginQuiz
