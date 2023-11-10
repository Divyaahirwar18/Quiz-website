const quizQuestions = [
    {
        question: " What is CSS",
        opt1: "CSS is a style sheet language",
        opt2: " CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        opt3: "CSS is the language used to style the HTML documents",
        opt4: " All of the mentioned",
        correct: "opt4",
    },
    {
        question: "Which of the following CSS selectors are used to specify a group of elements?",
        opt1: "tag",
        opt2: "id",
        opt3: "class",
        opt4: "both class and tag",
        correct: "opt3",
    },
    {
        question: "Which of the following tag is used to embed css in html page?",
        opt1: "<css>j",
        opt2: "<!DOCTYPE html>",
        opt3: "<script>",
        opt4: "<style>",
        correct: "opt4",
    },
    {
        question: "Which of the following type of HTML tag is used to define an internal style sheet?",
        opt1: "<script>",
        opt2: " <link>",
        opt3: "<class>",
        opt4: "<style>",
        correct: "opt4",
    },
    {
        question: "Which of the following CSS property is used to make the text bold?",
        opt1: " text-decoration: bold",
        opt2: " font-style: bold",
        opt3: "font-weight: bold",
        opt4: "text-align: bold",
        correct: "opt3",
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