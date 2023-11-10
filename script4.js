const quizQuestions = [
    {
        question: "What does the abbreviation HTML stand for?",
        opt1: "hypertxt markup language",
        opt2: "highttext markup language",
        opt3: "hypertext markdown language",
        opt4: "none of the above",
        correct: "opt1",
    },
    {
        question: "How many sizes of headers are available in HTML by default?",
        opt1: "5",
        opt2: "1",
        opt3: "6",
        opt4: "3",
        correct: "opt3",
    },
    {
        question: "What is the smallest header in HTML by default?",
        opt1: "h1",
        opt2: "h2",
        opt3: "h6",
        opt4: "h4",
        correct: "opt3",
    },
    {
        question: "HTML files are saved by default with the extension?",
        opt1: ".html",
        opt2: ".h",
        opt3: ".ht",
        opt4: "none of the above",
        correct: "opt1",
    },
    {
        question: "We enclose HTML tags within?",
        opt1: "{}",
        opt2: "<>",
        opt3: "!!",
        opt4: "none of the above",
        correct: "opt2",
    },
];
let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let current_question_number=0;
let score=0;
/**
 * A function to show question and options on html page.
 */
function showQuestion(){
    //uncheck all the option seleceted
    document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    //set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    question_txt_element.innerHTML = quizQuestions[current_question_number].question;
    option_1_element.innerHTML = quizQuestions[current_question_number].opt1;
    option_2_element.innerHTML = quizQuestions[current_question_number].opt2;
    option_3_element.innerHTML= quizQuestions[current_question_number].opt3;
    option_4_element.innerHTML= quizQuestions[current_question_number].opt4;
}

/**
 * Handling Event listner on button click
 */
next_button.addEventListener('click',()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if(optionIdSelected==null)
    {
        alert("Please select one option");
    }else{

        let option_correct = quizQuestions[current_question_number].correct;
        if(optionIdSelected.id==option_correct){
            score++;        
        }
        current_question_number ++;
        if(current_question_number>=quizQuestions.length){
            // show final answer
            current_question_number = 0;
            localStorage.setItem("score", score);
            location.href = "./resultPage.html";
    
        }else{
            //show next question
            showQuestion();
        }
    }
});

showQuestion();