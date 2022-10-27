// I need to begin creating elements that will pull from elements in my HTML document. So..

//HTML Elements

var startingPhase = document.getElementById('starting');
var inquiryPhase = document.getElementById('inquiry');
var endingPhase = document.getElementById('ending');

//And I have to create a variable for my questions. It would have to be an array? Or I need to create a dictionary?
// I'm going to test with one question before creating more.
// I know that I need the question, choices, and the correct answer all in one grouping, so...

//Questions

var questions = [
  
    {
        question: ' This is a test?',
        // I think my options would have to be a string, since I have to chose the correct answer from a selection
        options: [ 'a. incorrect', 'b. correct', 'c. incorrect', 'd. incorrect']
        answer: 'b. correct'
    },

];

// Function to start quiz

function beginQuiz(){

}

//Let me start with my listener since I know I have a button in my HTML.
//I know I'll have to create a function down the line to link to the button.

startingPhase.click = beginQuiz
