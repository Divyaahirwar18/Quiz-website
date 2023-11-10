const quizQuestions = [
    {
        question: "What is JavaScript?",
        opt1: "JavaScript is a scripting language used to make the website interactive",
        opt2: "JavaScript is an assembly language used to make the website interactive",
        opt3: "JavaScript is a compiled language used to make the website interactive",
        opt4: "None of the mentioned",
        correct: "opt1",
    },
    {
        question: "Which of the following is correct about JavaScript?",
        opt1: "JavaScript is an Object-Based language",
        opt2: "JavaScript is Assembly-language",
        opt3: "SJavaScript is an Object-Oriented language",
        opt4: "JavaScript is a High-level language",
        correct: "opt1",
    },
    {
        question: "Which of the following is not javascript data types?",
        opt1: "Null type",
        opt2: " Undefined type",
        opt3: "Number type",
        opt4: "All of the mentioned",
        correct: "opt4",
    },
    {
        question: " Where is Client-side JavaScript code is embedded within HTML documents?",
        opt1: "A URL that uses the special javascript:code",
        opt2: "A URL that uses the special javascript:protocol",
        opt3: "A URL that uses the special javascript:encoding",
        opt4: "A URL that uses the special javascript:stack",
        correct: "opt2",
    },
    {
        question: "Which of the following scoping type does JavaScript use?",
        opt1: "Sequential",
        opt2: "Segmental",
        opt3: " Lexical",
        opt4: " Literal",
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